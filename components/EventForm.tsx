'use client'
import { Input } from "@/components/ui/input"
import { useFormState } from 'react-dom'
import { postEvent } from "@/lib/actions/events.action"
import Button from "./Button";
import { BiSolidError } from "react-icons/bi"

const initialState = {
    error: false,
    message: '',
}


const EventForm = () => {
    const [state, clientAction] = useFormState(postEvent, initialState)

    return (

        <form className="flex flex-col gap-6 mt-6" action={clientAction}>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="title">Title:</label>
                    <Input type='text' placeholder="Enter title of event" name="title" required />
                </section>
                <section className="w-full md:w-1/2">
                    <label htmlFor="mode">Mode:</label>
                    <select name="mode" className="p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                </section>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <section className="w-full md:w-1/2">
                    <label htmlFor="date">Date:</label>
                    <Input type="datetime-local" name='date' required />
                </section>

                <section className="w-full md:w-1/2">
                    <label htmlFor="imgUrl">Image URL:</label>
                    <Input type='file' accept='.jpg, .png' name="img" required />
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
            {
                state?.error &&
                <div className='flex gap-4 p-4 mt-6 mx-auto bg-red-200 rounded-sm'>
                    <BiSolidError className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{state?.message}</p>
                </div>
            }
            <Button disable={false} />
        </form >

    );
};

export default EventForm;
