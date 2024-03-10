import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	adapter: PrismaAdapter(prisma),
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string() })
					.safeParse(credentials);
				try {
					if (parsedCredentials.success) {
						const { email, password } = parsedCredentials.data;

						const user = await prisma.user.findUnique({
							where: { email },
						});
						if (!user) throw new Error("No such user found.");
						else {
							if (user.password === password) return user;
							else throw new Error("Invalid credentials.");
						}
					} else {
						throw new Error(
							"zod says: " +
							parsedCredentials.error.issues[0].message
						);
					}
				} catch (error) {
					throw error.message;
				}
			},
		}),
	],
});
