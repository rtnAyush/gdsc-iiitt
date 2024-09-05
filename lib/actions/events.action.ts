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

export async function postEvent(formData: FormData) {
    const imgFile = formData.get("imgUrl");
    if (!imgFile) {
        console.log("No image found");
        return;
    }

    const uploadFormData = new FormData();
    uploadFormData.append("file", imgFile);
    uploadFormData.append("upload_preset", "your_upload_preset"); // Add your Cloudinary upload preset

    const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        {
            method: "POST",
            body: uploadFormData,
        }
    );

    const uploadResult = await uploadResponse.json();
    const imageUrl = uploadResult.secure_url;

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const dateTime = formData.get("dateTime") as string;
    // const venue = formData.get("venue") as string;
    const mode = formData.get("mode") as string;

    const mobj = moment(dateTime, "YYYY-MM-DDTHH:mm:ss") as any;
    const samay = mobj.format() as any;

    try {
        const eventTime = await prisma.eventData.findUnique({
            where: {
                dateTime: samay,
            },
        });

        if (eventTime) {
            console.log("An event already exists on given date");

            return {
                error: true,
                message: "An event already exists on given date",
            };
        }

        await prisma.eventData.create({
            data: {
                title,
                img: imageUrl,
                mode,
                description,
                dateTime: samay,
                // venue,
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
