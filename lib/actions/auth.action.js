'use server'

import { signIn, signOut } from "../auth/auth";
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation'
import { prisma } from "../prisma";

export async function loginWithCredentials(prevState, formData) {
    try {
        await signIn('credentials', formData)

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
            case 'CredentialsSignin':
                return {
                    error: true,
                    message: "Invalid credentials"
                }
            default:
                return {
                    error: true,
                    message: error.message.split(".")[0]
                }
            }
        }
        throw error;
    }
}

export async function registerWithCredentials(prevState, formData) {
    const username = formData.get('username')
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password1')

    try {

        //find if user exists
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            }
        })

        //if user exists, return error
        if (user) {
            return {
                error: true,
                message: "Username already exists"
            }
        }

        //if user does not exist, create user
        await prisma.user.create({
            data: {
                username: username,
                name: name,
                email: email,
                password: password
            },
        })

    } catch (err) {
        return {
            error: true,
            message: "Something went wrong."
        }
    }
    redirect('/login')
}

export async function logout() {
    await signOut()
}
