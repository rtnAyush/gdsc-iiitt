"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";
import { Role } from "@prisma/client";

interface addUserParams {
	username: string;
	name: string;
	email: string;
	password: string;
	role: Role;
}

export async function addUser({
	username,
	name,
	email,
	password,
	role,
}: addUserParams): Promise<any> {
	try {
		await prisma.user.create({
			data: {
				username,
				name,
				email,
				password,
				role,
				createdAt: new Date(),
			},
		});
		revalidatePath("/(root)/users", "page");
		return JSON.stringify({
			error: false,
			msg: "success",
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

interface updateUserParams {
	id: string;
	username: string;
	email: string;
	role: string;
}

export async function updateUser({
	id,
	username,
	email,
	role,
}: updateUserParams): Promise<any> {
	try {
		await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				username,
				email,
				role: role as Role,
			},
		});

		revalidatePath("/(root)/users", "page");

		return JSON.stringify({
			error: false,
			msg: "success",
		});
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}

export async function fetchUser({ userId }: { userId: string }) {
	try {
		const foundUser = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		revalidatePath("/(root)/users", "page");

		return JSON.parse(JSON.stringify(foundUser));
	} catch (e: any) {
		return JSON.stringify({
			error: true,
			msg: e.message,
		});
	}
}
