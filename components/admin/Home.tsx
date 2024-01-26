"use client";
import { Button } from '@/components/ui/button';
import { logout } from '@/lib/actions/auth.action';

export default function Home() {
    return (
        <div className='text-center'>
            <div className='flex justify-end m-3'>
                <Button
                    onClick={
                        async () => {
                            await logout();
                        }
                    }
                    className='border bg-gray-600 text-white rounded-md p-2 cursor-pointer hover:bg-gray-500'
                >
                    SignOut
                </Button>
            </div>
            <h1 className="text-3xl font-bold">Welcome to the admin panel</h1>
            <p className="text-xl font-semibold">Please select an option from the tabs above</p>
        </div>
    )
}
