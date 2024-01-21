import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EventsCards({ title, date, time, desciption, link, imgUrl }: { title: string, date: string, time: string, link?: string, desciption: string, tags?: string, imgUrl: string }) {
    return (
        <Card className="" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
            <CardHeader
                className="p-0 relative flex justify-center items-center rounded-t-lg"
            >
                <Image
                    src={imgUrl || "/profile/pro-pic.jpeg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="overflow-hidden object-cover rounded-t-md"
                />
            </CardHeader>
            <CardHeader className="py-3">
                <Link href="/events">
                    <CardTitle className="text-blue-500 font-normal text-xl">{title.substring(0, 25)} {title.split("").length > 28 && "..."}</CardTitle>
                </Link>
                <CardDescription>{date} | {time}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="leading-normal text-justify text-[14px]">{desciption.substring(0, 235)} {desciption.split("").length > 240 && "..."} {desciption.split("").length > 240 && <Link href={link || '#'}>Read More</Link>}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-6">
                {/* <p>{tags}</p> */}
                <Button variant="default">Register Now</Button>
            </CardFooter>
        </Card>
    )
}
