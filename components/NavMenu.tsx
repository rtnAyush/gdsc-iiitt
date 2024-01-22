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
import { RiTeamFill,RiAdminFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import Link from "next/link"

export default function NavMenu({ className }: { className?: string }) {
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
                            <SheetTrigger asChild>
                                <Link href="/" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <FaHome className="inline-block mr-2" size={20} />
                                    Home
                                </Link>
                            </SheetTrigger>
                            <SheetTrigger asChild>
                                <Link href="/events" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <FaCalendarAlt className="inline-block mr-2" size={20} />
                                    Events
                                </Link>
                            </SheetTrigger>
                            <SheetTrigger asChild>
                                <Link href="/team" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <RiTeamFill className="inline-block mr-2" size={20} />
                                    Teams
                                </Link>
                            </SheetTrigger>
                            <SheetTrigger asChild>
                                <Link href="/leaderboard" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <MdLeaderboard className="inline-block mr-2" size={20} />
                                    Leaderboard
                                </Link>
                            </SheetTrigger>
                            <SheetTrigger asChild>
                                <Link href="/admin" className="flex items-center p-3 text-xl hover:bg-slate-200">
                                    <RiAdminFill className="inline-block mr-2" size={20} />
                                    Admin
                                </Link>
                            </SheetTrigger>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}