import React from 'react'
import EventForm from '../EventForm'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function UploadEvents() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Add Event</CardTitle>
                <CardDescription>
                    Add events to the website
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">            
                <EventForm />
            </CardContent>
        </Card>
    )
}
