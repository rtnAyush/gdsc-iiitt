'use client'
import { Input } from "@/components/ui/input"
import { useFormState } from 'react-dom'
import { postEvent } from "@/lib/actions/events.action"
import Button from "./Button";

const EventForm = () => {
    const [message, clientAction] = useFormState(postEvent, undefined)

    return (
    
                <form className="flex flex-col gap-6 mt-6" action={clientAction}>
                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <section className="w-full md:w-1/2">
                            <label htmlFor="title">Title:</label>
                            <Input type='text' placeholder="Enter title of event" name="title" required/>
                        </section>

                        <section className="w-full md:w-1/2">
                            <label htmlFor="location">Location:</label>
                            <Input type='text' placeholder="online/offline" name='location' required/>
                        </section>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <section className="w-full md:w-1/2">
                            <label htmlFor="date">Date:</label>
                            <Input type="datetime-local" name='date' required/>
                        </section>

                        {/* <section className="w-full md:w-1/2">
                            <label htmlFor="time">Time:</label>
                            <Input type='time' name="time" />
                        </section> */}
                        <section className="w-full md:w-1/2">
                            <label htmlFor="imgUrl">Image URL:</label>
                            <Input type='file' accept='.jpg, .png' name="img" required/>
                        </section>
                    </div>

                    <section className="flex flex-col">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="border p-2 rounded-md"
                            placeholder="Enter description of event"
                            required
                        ></textarea>
                    </section>
                    <Button disable={false} />
                </form >

    );
};

export default EventForm;
