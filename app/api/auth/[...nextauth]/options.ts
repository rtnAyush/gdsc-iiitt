import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username",
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password",
                },
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = {
                    id: "42",
                    name: "admin",
                    email: "admin@admin.com",
                    image: "/aysuh.png",
                    role: "user",
                    password: "admin",
                };

                if (
                    credentials?.username === user.name &&
					credentials?.password === user.password
                ) {
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }: { token: any; user: any }) {
            if (user) token.role = user.role;
            return token;
        },
        session({ session, token }: { session: any; token: any }) {
            session.user.role = token.role;
            return session;
        },
    },
};
