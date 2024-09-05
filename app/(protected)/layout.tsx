import type { PropsWithChildren } from "react";
import { Protect } from "@clerk/nextjs";

export default function AdminLayout(props: PropsWithChildren) {

    return (
        <Protect
            // permission="org:admin"
            fallback={<p>You are not allowed to see this section.</p>}
        >
            {props.children}
        </Protect>
    )
}