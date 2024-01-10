"use server";
import getErrorMessage from "@/utils/error";
import { prisma } from "../prisma";
import { returnType, studentDataType } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function addStudentDatas(
	parsedDataResult: studentDataType[]
): Promise<returnType> {
	return new Promise(async (resolve, reject) => {
		try {
			const studentDatas = [];
			for (const data of parsedDataResult) {
				const studentData = await prisma.studentData.upsert({
					where: {
						student_email: data.student_email,
					},
					update: {
						...data,
						updatedAt: new Date(),
						total_completions:
							data.of_courses_completed +
							data.of_skill_badges_completed +
							data.of_gen_ai_game_completed,
					},
					create: {
						...data,
						total_completions:
							data.of_courses_completed +
							data.of_skill_badges_completed +
							data.of_gen_ai_game_completed,
					},
				});
				studentDatas.push(studentData);
			}
			resolve({
				error: false,
				msg: "success",
			});
		} catch (error: any) {
			console.error("Error parsing data:", error);
			reject({
				error: true,
				msg: getErrorMessage(error),
			});
		}
	});
}

export async function fetchStudentData(): Promise<returnType> {
	try {
		const studentData = await prisma.studentData.findMany({
			orderBy: [
				{ total_completions: "desc" },
				{
					updatedAt: "asc",
				},
			],
		});
		revalidatePath("/");
		return {
			error: false,
			msg: "success",
			data: studentData,
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return {
			error: true,
			msg: getErrorMessage(error),
		};
	}
}

export async function deleteStudentData(): Promise<returnType> {
	return new Promise(async (resolve, reject) => {
		try {
			const studentData = await prisma.studentData.deleteMany({});
			resolve({
				error: false,
				msg: "success",
				data: studentData,
			});
		} catch (error) {
			console.error("Error fetching data:", error);
			reject({
				error: true,
				msg: getErrorMessage(error),
			});
		}
	});
}
