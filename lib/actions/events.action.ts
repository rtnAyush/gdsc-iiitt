'use server'
import { prisma } from "../prisma"
import moment from 'moment'
export async function postEvent(prevState:any, formData:any) {
    
    const title = formData.get('title')
    const tags = formData.get('tags')
    const img = formData.get('img')
    const location = formData.get('location')
    const description = formData.get('description')
    const date = formData.get('date')

    // const time = formData.get('time')
    
    const mobj = moment(date , "YYYY-MM-DD HH:mm:ss") as any;
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
            return {
                error: true,
                message: "An event already exists on given time"
            }
        }
        

        //if event does not exist, create event
        await prisma.eventData.create({
            data: {
                title: title,
                tags: tags,
                img: "img",
                location: location,
                description: description,
                dateTime: samay,
            },
        })
        

    } catch (err : any) {
        console.log(err.message);
        return {
            error: true,
            message: "Something went wrong."
        }
    }
}