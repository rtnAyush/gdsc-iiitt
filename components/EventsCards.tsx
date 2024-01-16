import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
import john3 from "@/public/assets/johnwick4-section-promo-double-home-03.jpg"
import Link from "next/link";

export default function EventsCards({ events }) {

    // TODO: Use this for mapping events from the database

    // const cards = events.map((event) => {
    //     return (
    //         <Card className="">
    //             <div>
    //                 <Image
    //                     src={john3}
    //                     alt="event_image"
    //                     width='500'
    //                     height='300'
    //                     className="rounded-t-md"
    //                 />
    //             </div>
    //             <CardHeader>
    //                 <CardTitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
    //                 <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
    //             </CardContent>
    //             <CardFooter className="flex flex-col items-start gap-6">
    //                 <p>Lorem ipsum dolor sit amet.</p>
    //                 <Button variant="default">Register Now</Button>
    //             </CardFooter>
    //         </Card>
    //     )
    // })
    return (
        // <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        //     {cards}
        // </div>
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
            <Card className="">
                <div>
                    <Image
                        src={john3}
                        alt="event_image"
                        width='500'
                        height='300'
                        className="rounded-t-md"
                    />
                </div>
                <CardHeader>
                    <Link href="/events">
                        <CardTitle className="text-blue-500 font-normal text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, voluptates.</CardTitle>
                    </Link>
                    <CardDescription>Lorem ipsum | dolor sit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sit recusandae dolores aperiam laborum maiores modi natus quod, ipsum nam.</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Button variant="default">Register Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
