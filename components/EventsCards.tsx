import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import Link from "next/link";
import CloudinaryImg from "./CloudinaryImg";

export default function EventsCards({ title, dateTime, desciption, imgUrl, mode }: { title: string, dateTime: Date, desciption: string, mode: string, imgUrl?: string }) {
    const link = `/events/`
    return (
        <Card className="flex flex-col" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
            <CardHeader
                className="p-0 relative flex justify-center items-center rounded-t-lg"
            >
                <CloudinaryImg
                    src={imgUrl || "/profile/pro-pic.jpeg"}
                />
            </CardHeader>
            <CardHeader className="py-3">
                <Link href={link}>
                    <CardTitle className="text-blue-500 font-normal text-xl">{title.substring(0, 25)} {title.split("").length > 28 && "..."}</CardTitle>
                </Link>
                <p className="leading-normal text-justify text-[14px]">{dateTime?.toLocaleDateString()} {dateTime?.toLocaleTimeString()} | {mode}</p>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription className="break-all">{desciption.substring(0, 200)} {desciption.split("").length > 210 && "..."} {desciption.split("").length > 240 && <Link href={link}>Read More</Link>}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-6">
                <Button variant="default">Register Now</Button>
            </CardFooter>
        </Card>
    )
}
