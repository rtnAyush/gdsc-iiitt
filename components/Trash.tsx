'use client'
import { Button } from '@/components/ui/button';
import { deleteEvent } from '@/lib/actions/events.action';
import { FaTrash } from "react-icons/fa";

export default function Trash({id}: {id: string}) {
    const handleDelete = async (id: string) => {
        await deleteEvent(id);
        alert('Event deleted successfully');
    }
    return (
        <Button variant='ghost' onClick={() => handleDelete(id)}><FaTrash color='red' size={20} /></Button>
    )
}
