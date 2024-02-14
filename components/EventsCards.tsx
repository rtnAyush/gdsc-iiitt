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

export default function EventsCards({ title, dateTime, desciption, img,mode }: { title: string, dateTime: Date,  desciption: string, mode: string, img?: string }) {
    const link = `/events/`
    return (
        <Card className="flex flex-col" style={{ boxShadow: "5px 5px 10px #cdcfcf, -5px -3px 5px #fff" }}>
            <CardHeader
                className="p-0 relative flex justify-center items-center rounded-t-lg"
            >
                <Image
                    src={img || "/profile/pro-pic.jpeg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="overflow-hidden object-cover rounded-t-md"
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
