'use client'

import { registerWithCredentials } from '@/lib/actions/auth.action';
import Button from './Button';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { BiSolidError } from "react-icons/bi"

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState({ username: '',name:'', email: '', password1: '', password2: '' })
    const [message, clientAction] = useFormState(registerWithCredentials, undefined)

    return (
        <form action={clientAction} className="flex flex-col w-full max-w-md">
            <input
                name="username"
                className='border border-gray-300 h-10 px-4 rounded-t-md focus:outline-none font-sans text-sm font-normal'
                type="text"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                placeholder="Username"
            />
            <input
                name="email"
                className='border border-t-0 border-gray-300 h-10 px-4 focus:outline-none font-sans text-sm font-normal'
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                placeholder="Email address"
            />
            <input
                name="name"
                className='border border-t-0 border-gray-300 h-10 px-4 focus:outline-none font-sans text-sm font-normal'
                type="text"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                placeholder="Enter your name"
            />
            <input
                name="password1"
                className='border border-t-0 border-gray-300 h-10 px-4 focus:outline-none font-sans text-sm font-normal'
                type="password"
                value={registerData.password1}
                onChange={(e) => setRegisterData({ ...registerData, password1: e.target.value })}
                placeholder="Password"
            />
            <input
                name="password2"
                className='border-t-0 border border-gray-300 h-10 px-4 rounded-b-md focus:outline-none font-sans text-sm font-normal'
                type="password"
                value={registerData.password2}
                onChange={(e) => setRegisterData({ ...registerData, password2: e.target.value })}
                placeholder="Password again"
            />
            <Button disable={!registerData.email || !registerData.username || !registerData.name || !registerData.password1 || !registerData.password2 || !(registerData.password1 === registerData.password2)} />
            {message?.error && (
                <div className='flex gap-4 p-4 mt-6 bg-red-200 rounded-sm'>
                    <BiSolidError className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{message.message}</p>
                </div>
            )}
        </form>
    )
}