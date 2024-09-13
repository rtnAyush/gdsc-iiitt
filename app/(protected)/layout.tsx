import type { PropsWithChildren } from "react";
import { Protect } from "@clerk/nextjs";

import { auth, currentUser } from '@clerk/nextjs/server';

export default async function AdminLayout(props: PropsWithChildren) {

    const user = await currentUser();
    console.log(user?.privateMetadata);

    if (user?.privateMetadata?.role === "admin") {
        return (
            <div
            >
                {props.children}
            </div>
        )

    }

    return "fuck you"
}