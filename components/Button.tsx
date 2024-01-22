'use client'

import {useFormStatus} from 'react-dom'
export default function Button({disable}:{disable:boolean}) {
    const {pending}=useFormStatus()
    return (
        <button
            className='disabled:opacity-40 bg-blue-500 hover:bg-blue-400 border-none rounded-md h-14 mt-6 text-white font-sans'
            disabled={pending || disable}
        >
            {pending ? "Submitting..." : "Submit" }
        </button>
    )
}