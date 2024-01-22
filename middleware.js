import NextAuth from 'next-auth';
import { authConfig } from './lib/auth/config/auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
