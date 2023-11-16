import Admin from "@/components/Admin";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await getServerSession(options);

    console.log(session);


    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }
    return (
        <Admin />
    )
}
