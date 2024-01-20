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
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NavMenu({ className }) {
    {
        return (
            <div className={cn(className)}>
                <Sheet>
                    <SheetTrigger><RxHamburgerMenu size={30}/></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-2xl">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="py-4 flex flex-col items-start space-y-4">
                            <Link href="/" className="text-xl">Home</Link>
                            <Link href="/events" className="text-xl">Events</Link>
                            <Link href="/team" className="text-xl">Teams</Link>
                            <Link href="/leaderboard" className="text-xl">Leaderboard</Link>
                            <Link href="/" className={buttonVariants({ variant: "default" })}>Join Club</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        )
    }
}