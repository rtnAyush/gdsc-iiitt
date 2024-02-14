import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import NavMenu from "./NavMenu";
// import { ThemeSwitcher } from "./ThemeSwitcher";
import { auth } from "@/lib/auth/auth";

export default async function NavBar() {
    const session = await auth()
    return (
        <nav className="w-full shadow-md relative ">
            {/* <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
                <div className="">
                    <Image
                        src="/assets/cloudLg.png"
                        alt="cloudLg"
                        width="40"
                        height="40"
                    />
                </div>
                <p className="">Google Cloud STUDY JAMS 23 - 24</p>
            </div> */}

            <div className="py-3 sm:px-10 px-3 flex mob:flex-col m-auto justify-between items-center">
                <Link
                    href={"/"}
                    className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center"
                >
                    <div className="img w-12 h-1w-16 rounded-full ">
                        <Image
                            src="/assets/gdsc-logo.png"
                            alt="gdsc-logo"
                            width="40"
                            height="40"
                        />
                    </div>
                    <div className="text flex flex-col justify-start items-start">
                        <p className="text-base">Google Developer Student Club</p>
                        <p className="text-xs">
                            {" "}
                            Indian Institute of Information Technology Tiruchirappalli
                        </p>
                    </div>
                </Link>
                <div className="hidden lg:flex justify-center items-center space-x-1 sm:space-x-5">
                    <Link href="/">Home</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/team">Teams</Link>
                    <Link href="/leaderboard">LeaderBoard</Link>
                    <Link href="/admin" className={buttonVariants({ variant: session? 'default':"secondary" })}>Admin</Link>
                    {/* <Link href="#"><ThemeSwitcher /></Link> */}
                </div>
                <NavMenu className="lg:hidden" />
            </div>
        </nav >
    );
}
