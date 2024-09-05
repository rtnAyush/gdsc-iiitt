import React from 'react'
import EventForm from './EventForm'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

export default function Events() {
    return (
        <Card>
            <Tabs defaultValue="home">
                <CardHeader className='flex flex-row justify-between'>
                    <div>
                        <CardTitle className='text-lg md:text-xl'>Events</CardTitle>
                        <CardDescription>
                            Manage events on the website
                        </CardDescription>
                    </div>
                    <div className="flex justify-end">
                        <EventForm />
                    </div>
                </CardHeader>
                {/* <CardContent className="space-y-2">
                    <TabsContent value="home"><ModifyEvents /></TabsContent>
                    <TabsContent value="add-event"><EventForm /></TabsContent>
                </CardContent> */}
            </Tabs>
        </Card >
    )
}
