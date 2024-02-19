import React from 'react'
import EventForm from '../EventForm'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ModifyEvents from './ModifyEvents';

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
                    <TabsList className="flex justify-center">
                        <TabsTrigger value="home">Events</TabsTrigger>
                        <TabsTrigger value="add-event">Add Event</TabsTrigger>
                    </TabsList>
                </CardHeader>
                <CardContent className="space-y-2">
                    <TabsContent value="home"><ModifyEvents /></TabsContent>
                    <TabsContent value="add-event"><EventForm /></TabsContent>
                </CardContent>
            </Tabs>
        </Card >
    )
}
