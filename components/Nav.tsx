import Navbar from './Navbar';
import { getServerSession } from 'next-auth/next';

export default async function Nav() {
  const session = await getServerSession();
  return <Navbar user={session?.user} />;
}
