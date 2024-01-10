import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
export type { NextAuthOptions } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			role: string;
		} & DefaultSession;
	}

	interface User extends DefaultUser {
		role: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		role: string;
	}
}
