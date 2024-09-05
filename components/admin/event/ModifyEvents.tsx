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
import { Event } from '@/utils/types'
import Trash from '../../Trash';
import moment from 'moment';
import CloudinaryImg from '../../CloudinaryImg';

export default async function ModifyEvents() {
    const events: any = await getEvents();

    const rows = events.data.map((event: Event) => {
        const mobj = moment(event.dateTime, "YYYY-MM-DD HH:mm:ss") as any;
        const samay = mobj.format().slice(0, 10) as any

        return (
            <TableRow key={event.id}>
                <TableCell>{samay}</TableCell>
                <TableCell>
                    <div className="p-0 relative flex justify-center items-center rounded-t-lg">
                        <CloudinaryImg src={event.img} />
                    </div>
                </TableCell>
                <TableCell>{event.title.substring(0, 50)} {event.title.split("").length > 50 && "..."}</TableCell>
                <TableCell>{new Date(event.dateTime) > new Date() ? <Badge variant='default'>Ongoing</Badge> : <Badge variant='destructive'>Expired</Badge>}</TableCell>
                <TableCell>{event.mode}</TableCell>
                <TableCell><Trash id={event.id} /></TableCell>
            </TableRow>
        )
    })
    return (
        <Table>
            <TableCaption>A list of GDSC Events.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Mode</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    )
}
