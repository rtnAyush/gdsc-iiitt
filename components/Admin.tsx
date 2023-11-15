"use client";
import { useState } from 'react';
import { addStudentDatas, fetchStudentData } from '@/lib/actions/student.action';
import parsedData from '@/controllers/studentdata.controller';
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';

export default function Admin() {
    const [loading, setLodaing] = useState(false);
    const [show, setShow] = useState(false);

    async function handleSubmit(formData: FormData) {

        const file = formData.get('excel-file');

        if (!file) {
            console.log("No file selected.");
            return;
        }

        try {
            setLodaing(true);
            const exsitingdata = await fetchStudentData();
            const parsedDataResult = await parsedData({ file: file as Blob, existingData: exsitingdata?.data || [] });
            if (parsedDataResult?.error) {
                toast.error(parsedDataResult.msg);
                return;
            }
            const res = addStudentDatas(parsedDataResult.data);
            toast.promise(
                res,
                {
                    loading: 'Loading',
                    success: "Successfully saved",
                    error: "something went wrong",
                },
                {
                    style: {
                        minWidth: '250px',
                    },
                    success: {
                        duration: 5000,
                        icon: '🔥',
                    },
                }
            );
        } catch (error: any) {
            toast.error("Error parsing data:", error);
        } finally {
            setLodaing(false);
        }


    };

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl h-80 flex flex-col justify-center">
            <DeleteModal setShow={setShow} show={show} />
            <div className='flex justify-end m-3'>
                <button onClick={() => setShow(true)} className='border bg-red-600 text-white rounded-md p-2 cursor-pointer hover:bg-red-500'>Delete All Data</button>
            </div>
            <form action={handleSubmit} className="grid gap-4">
                <input type="file" required name="excel-file" accept=".xlsx" className='border rounded-md p-4' />
                {
                    loading ?
                        <button type="submit" className="bg-blue-500 text-white border rounded-md p-2 flex items-center justify-center gap-3 hover:bg-blue-400" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg>
                            Processing...
                        </button>
                        :
                        <button className='border bg-blue-600 text-white rounded-md p-2 cursor-pointer hover:bg-blue-500' >Submit</button>
                }
            </form>
        </main>
    )
}