import { CgProfile } from "react-icons/cg"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LuLogOut } from "react-icons/lu"
import Link from "next/link"
import { buttonVariants } from "./ui/button";
import { auth, signOut } from "@/lib/auth/auth";

export default async function Profile() {
    const session = await auth()    
    return (
        <div>
            {
                session?.user ? (
                    <Sheet>
                        <SheetTrigger>
                            <CgProfile size={25} color='#36454F' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className='mt-6 flex flex-col gap-4'>
                                <div className='flex flex-col items-start'>
                                    <SheetTitle>{session?.user?.name}</SheetTitle>
                                    <p>{session?.user?.email}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <form
                                        action={async () => {
                                            'use server';
                                            await signOut();
                                        }}
                                        className='flex items-center gap-4 hover:bg-slate-200 pt-2 pb-2'
                                    >
                                        <LuLogOut size={22} />
                                        <button >Logout</button>
                                    </form>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <Link href='/login' className={buttonVariants()}>Join Club</Link>
                )
            }
        </div>
    )
}