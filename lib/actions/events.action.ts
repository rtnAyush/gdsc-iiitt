"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";
import moment from "moment";
import cloudinary from "../cloudinary";

export async function getEvents(date?: Date, type?: string, quantity?: number) {
	try {
		let whereCondition = {};
		switch (type) {
			case "upcoming":
				whereCondition = {
					dateTime: {
						gte: date,
					},
				};
				break;
			case "past":
				whereCondition = {
					dateTime: {
						lt: date,
					},
				};
				break;
			case "ongoing":
				whereCondition = {
					dateTime: {
						equals: date,
					},
				};
				break;
			default:
				// No specific type, fetch all events
				break;
		}

		const eventsQuery = {
			where: whereCondition,
			take: quantity, // Add take option for limiting records
		};

		const events = await prisma.eventData.findMany(eventsQuery);

		return {
			error: false,
			data: events,
		};
	} catch (err: any) {
		console.log(err.message);
		return {
			error: true,
			message: "Something went wrong.",
		};
	}
}

export async function postEvent(prevState: any, formData: any) {
	const title = formData.get("title");
	const img = formData.get("img");
	const mode = formData.get("mode");
	const description = formData.get("description");
	const date = formData.get("date");
	if (img === null || img === undefined) {
		console.log("No image found");
		return;
	}

	const arrayBuffer = await img.arrayBuffer();
	const buffer = new Uint8Array(arrayBuffer);
	const uploadResult = (await new Promise((resolve, reject) => {
		cloudinary.uploader
			.upload_stream({}, function (err, result) {
				if (err) {
					reject(err);
					return;
				}
				resolve(result);
			})
			.end(buffer);
	})) as any;

	// const time = formData.get('time')

	const mobj = moment(date, "YYYY-MM-DD HH:mm:ss") as any;
	const samay = mobj.format() as any;

	try {
		//find if event exists
		const eventTime = await prisma.eventData.findUnique({
			where: {
				dateTime: samay,
			},
		});

		//if event exists, return error
		if (eventTime) {
			console.log("An event already exists on given date");

			return {
				error: true,
				message: "An event already exists on given date",
			};
		}

		//if event does not exist, create event
		await prisma.eventData.create({
			data: {
				title: title,
				img: uploadResult.secure_url,
				mode: mode,
				description: description,
				dateTime: samay,
			},
		});
		revalidatePath("/admin");

		return {
			error: false,
			message: "Event created successfully",
		};
	} catch (err: any) {
		console.log(err.message);
		return {
			error: true,
			message: "Something went wrong.",
		};
	}
}

export async function deleteEvent(id: string) {
	try {
		const deletedEvent = await prisma.eventData.delete({
			where: {
				id: id,
			},
		});
		const imgPublicId = deletedEvent.img
			.split("/")
			.slice(-2)
			.join("/")
			.split(".")[0] as string;

		(await new Promise((resolve, reject) => {
			cloudinary.uploader.destroy(imgPublicId, function (err, result) {
				if (err) {
					reject(err);
					return;
				}
				resolve(result);
			});
		})) as any;

		revalidatePath("/admin");
		return {
			error: false,
			message: "Event deleted successfully",
		};
	} catch (err: any) {
		console.log(err.message);
		return {
			error: true,
			message: "Something went wrong.",
		};
	}
}
