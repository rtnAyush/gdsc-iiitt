'use server'
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma"
import moment from 'moment'

export async function getEvents(date?: Date, type?: string) {
    try {
        switch (type) {
            case "upcoming":
                const upcomingEvents = await prisma.eventData.findMany({
                    where: {
                        dateTime: {
                            gt: date,
                        }
                    }
                })
                return {
                    error: false,
                    data: upcomingEvents
                }
            case "past":
                const pastEvents = await prisma.eventData.findMany({
                    where: {
                        dateTime: {
                            lt: date,
                        }
                    }
                })
                return {
                    error: false,
                    data: pastEvents
                }
            case "ongoing":
                const ongoingEvents = await prisma.eventData.findMany({
                    where: {
                        dateTime: {
                            equals: date,
                        }
                    }
                })
                return {
                    error: false,
                    data: ongoingEvents
                }
            default:
                const allEvents = await prisma.eventData.findMany()
                return {
                    error: false,
                    data: allEvents
                }
        }
    } catch (err: any) {
        console.log(err.message);
        return {
            error: true,
            message: "Something went wrong."
        }
    }
}


export async function postEvent(prevState: any, formData: any) {

    const title = formData.get('title')
    const img = formData.get('img')
    const mode = formData.get('mode')
    const description = formData.get('description')
    const date = formData.get('date')

    // const time = formData.get('time')

    const mobj = moment(date, "YYYY-MM-DD HH:mm:ss") as any;
    const samay = mobj.format() as any

    try {

        //find if event exists
        const eventTime = await prisma.eventData.findUnique({
            where: {
                dateTime: samay,
            }
        });

        //if event exists, return error
        if (eventTime) {
            console.log("An event already exists on given date");
            
            return {
                error: true,
                message: "An event already exists on given date"
            }
        }


        //if event does not exist, create event
        await prisma.eventData.create({
            data: {
                title: title,
                img: "img",
                mode: mode,
                description: description,
                dateTime: samay,
            },
        })
        revalidatePath('/admin')
        
        return {
            error: false,
            message: "Event created successfully"
        }
        
    } catch (err: any) {
        console.log(err.message);
        return {
            error: true,
            message: "Something went wrong."
        }
    }
}