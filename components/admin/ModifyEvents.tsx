import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"

import { getEvents } from '@/lib/actions/events.action'

interface Event {
    id:string,
    dateTime: any,
    title: string,
    mode: string,
}
import moment from 'moment';

export default async function ModifyEvents() {
    // TODO: Fetch events
    const events = await getEvents() as any || []; 
    
    console.log(events);
    
    
    const rows = events.map((event: Event) => {
        const mobj = moment(event.dateTime , "YYYY-MM-DD HH:mm:ss") as any;
        const samay = mobj.format().slice(0,10) as any
        
        return (
            <TableRow key={event.id}>
                <TableCell>{samay}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{new Date(event.dateTime) > new Date() ? <Badge variant='default'>Ongoing</Badge> : <Badge variant='destructive'>Expired</Badge>}</TableCell>
                <TableCell>{event.mode}</TableCell>
            </TableRow> 
        )
    }) 
    return (
        <Table>
            <TableCaption>A list of GDSC Events.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead >Title</TableHead>
                    <TableHead   className="w-[100px]">Status</TableHead>
                    <TableHead className="w-[100px]">Mode</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
}
