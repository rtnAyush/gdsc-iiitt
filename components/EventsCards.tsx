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

export default function EventsCards({ title, date, time, desciption, tags, imgUrl }: { title: string, date: string, time: string, desciption: string, tags: string, imgUrl: string }) {
    return (
        <Card className="">
            {/* <div className="w-full">
                <Image
                    src={imgUrl}
                    alt="event_image"
                    layout='fill'
                    objectFit='contain'
                    className="rounded-t-md"
                />
            </div> */}
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
            <CardHeader>
                <Link href="/events">
                    <CardTitle className="text-blue-500 font-normal text-xl">{title}</CardTitle>
                </Link>
                <CardDescription>{date} | {time}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{desciption}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-6">
                <p>{tags}</p>
                <Button variant="default">Register Now</Button>
            </CardFooter>
        </Card>
    )
}
