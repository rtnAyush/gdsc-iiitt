import * as XLSX from "xlsx";
import snakeCase from "lodash/snakeCase";
import { returnType, studentDataType } from "@/utils/types";
import getErrorMessage from "@/utils/error";

function readFromExcel(file: Blob): Promise<studentDataType[]> {
	return new Promise((resolve, reject) => {
		try {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);
			fileReader.onload = (e) => {
				const bufferArray = e.target?.result;
				const workbook = XLSX.read(bufferArray, {
					type: "buffer",
				});

				const sheetName = workbook.SheetNames[0];
				const sheet = workbook.Sheets[sheetName];
				const jsonData = XLSX.utils.sheet_to_json(sheet, {
					header: 1,
					raw: false,
					defval: "",
				}) as any[];

				const headers = jsonData[0];
				const data = jsonData.slice(1);

				const parsedData: any[] = data.map((row) => {
					const rowData: any = {};
					headers.forEach((header: string, idx: number) => {
						header = snakeCase(header);
						if (
							header === "of_courses_completed" ||
							header === "of_skill_badges_completed" ||
							header === "of_gen_ai_game_completed"
						) {
							rowData[header] = parseInt(row[idx]);
						} else {
							rowData[header] = row[idx];
						}
					});
					return rowData;
				});

				resolve(parsedData);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		} catch (error) {
			reject(error);
		}
	});
}

export default async function parsedData({
	file,
	existingData,
}: {
	file: Blob;
	existingData: studentDataType[];
}): Promise<returnType> {
	const updatedRecords: studentDataType[] = [];
	try {
		const newRecords = await readFromExcel(file);
		
		newRecords.forEach((newRecord) => {
			const existingRecordIdx = existingData?.findIndex(
				(record) => record.student_email === newRecord.student_email
			);
			if (existingRecordIdx !== -1) {
				if (
					existingData[existingRecordIdx].of_courses_completed !==
						newRecord.of_courses_completed ||
					existingData[existingRecordIdx]
						.of_skill_badges_completed !==
						newRecord.of_skill_badges_completed ||
					existingData[existingRecordIdx].of_gen_ai_game_completed !==
						newRecord.of_gen_ai_game_completed
				) {
					updatedRecords.push(newRecord);
				}
			} else {
				updatedRecords.push(newRecord);
			}
		});
		return {
			error: false,
			msg: "success",
			data: updatedRecords,
		};
	} catch (error) {
		console.log("Error parsing data:", error);
		return {
			error: true,
			msg: getErrorMessage(error),
		};
	}
}
