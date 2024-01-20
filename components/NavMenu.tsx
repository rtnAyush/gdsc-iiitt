import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { RxHamburgerMenu } from "react-icons/rx"
import { FaHome,FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NavMenu({ className }) {
    {
        return (
            <div className={cn(className)}>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={30} /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="pl-3 text-2xl text-left">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 flex flex-col">
                            <Link href="/" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                <FaHome className="inline-block mr-2" size={20} />
                                Home
                            </Link>
                            <Link href="/events" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                <FaCalendarAlt className="inline-block mr-2" size={20} />
                                Events
                            </Link>
                            <Link href="/team" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                <RiTeamFill className="inline-block mr-2" size={20} />
                                Teams
                            </Link>
                            <Link href="/leaderboard" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                <MdLeaderboard className="inline-block mr-2" size={20} />
                                Leaderboard
                            </Link>
                            <Link href="/" className={`${buttonVariants({ variant: "default" })} w-28 m-4`}>Join Club</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}