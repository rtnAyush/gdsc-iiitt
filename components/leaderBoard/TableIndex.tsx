"use client";
import { useState, useEffect } from 'react';
import TableBody from './TableBody';
import { studentDataType } from '@/utils/types';


export default function TableIndex({ participationData }: any) {

    const [randomJoke, setRandomJoke] = useState<any>(null);
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    const [EligibleforSwags, setEligibleforSwags] = useState(0);
    const [searchByName, setSearchByName] = useState('');
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getJoke();
        calculateTotalEligibility(participationData);
        setTotal(participationData.length);
    // eslint-disable-next-line
  }, [])


    const calculateTotalEligibility = (data: studentDataType[]) => {
        let total = 0;
        data.forEach((ele) => {
            ele["total_completions_of_both_pathways"] === "Yes" && total++;
        })
        setEligibleforSwags(total)
    }


    const getJoke = async () => {
        try {
            const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            }
            const data = await res.json();
            setRandomJoke(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='w-full relative px-3'>



            <div className="sec m-auto my-10 space-y-8 md:w-1/2 flex flex-col">
                <div className="message bg-yellow-100 text-yellow-700 p-5 rounded-lg shadow-lg shadow-yellow-300/30 text-center border border-yellow-300/30"><p className="text-center">-: Jokes :-</p>
                    <p><span className="text-black">Someone : </span>
                        {
                            randomJoke ?
                                randomJoke?.setup :
                                "How did you fall in poverty ? gamble or drugs ?"
                        }
                    </p>
                    <p><span className="text-black">Me : </span>
                        {
                            randomJoke ?
                                randomJoke?.delivery :
                                "I left an Ec2 Instance on... !🥲"
                        }
                    </p>
                </div>

                <div className="info grid gap-3 sm:flex sm:justify-center sm:items-center mob:p-5 justify-evenly mob:space-x-0">
                    <div className="eligibleforswag space-x-5 flex-1 w-full p-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-green-50 shadow-lg shadow-green-300/30 border border-green-200">
                        <p className="text-center mob:text-start text-sm text-green-400">No of Eligible <br /> Participants for swags</p>
                        <p className="no text-2xl border-l-2 border-l-green-700 pl-3 text-green-800">{EligibleforSwags}</p>
                    </div>
                    <div className="flex-1 w-full p-5 space-x-5 rounded-lg flex flex-row justify-evenly mob:justify-between items-center bg-blue-50 shadow-lg shadow-blue-300/30 border border-blue-200">
                        <p className="text-center mob:text-start text-sm text-blue-400">Total No of <br />Participants</p>
                        <p className="no text-2xl border-l-2 border-l-blue-700 pl-3 text-blue-800">{total}</p>
                    </div>
                </div>

                <div className="searchByName m-auto mt-3 mob:py-3 py-2  space-x-5  flex justify-start items-center shadow-lg shadow-blue-400/30 bg-blue-50 w-full rounded-full">
                    <div className="icon px-3 "><svg xmlns="http://www.w3.org/2000/svg" className='h-5' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#3b82f6" /></svg></div>
                    <div className="input w-full">
                        <input
                            onChange={(e) => {
                                setSearchByName(e.target.value)
                            }}
                            className='bg-transparent mob:text-lg text-base outline-none w-full' type="text" name="searchbar" id="searchbar" placeholder='Search Your Name Here' />
                    </div>
                </div>
            </div>

            <div className='overflow-x-auto mx-auto'>
                <table className='table-auto sm:table-fixed mx-auto m-5'>
                    <thead className='shadow-md text-sm bg-blue-500 text-gray-200 sticky top-2 z-10'>
                        <tr className='text-center '>
                            <td className="rounded-ss-lg w-80 p-2 border-r-2 border-r-gray-300">Name</td>
                            {/* <td className="p-2 border-r-2 border-r-gray-300">Email</td> */}
                            <td className="p-2 border-r-2 border-r-gray-300 whitespace-nowrap">Redemption Status</td>
                            <td className="mob:hidden p-2 px-10 border-r-2 border-r-gray-300">Institution</td>
                            <td className="mob:rounded-se-lg p-2 border-r-2 border-r-gray-300 max-w-[150px]">Completions of both Pathways</td>
                            <td className="mob:hidden p-2 border-r-2 border-r-gray-300 max-w-[150px]">No Courses Completed</td>
                            <td className="mob:hidden p-2 border-r-2 border-r-gray-300 max-w-[150px]">No Skill Badges Completed</td>
                            <td className="mob:hidden rounded-se-lg p-2 max-w-[150px]">GenAI Game Completed</td>
                            {/* <td className="p-2 border-r-2 border-r-gray-300">Enroll Date & Time</td> */}
                            {/* <td className="p-2 border-r-2 border-r-gray-300">Enroll. Status</td> */}
                            {/* <td className='p-2 border-r-2 border-r-gray-300'>Profile URL</td> */}
                        </tr>
                    </thead>
                    {
                        !loading ?
                            <TableBody
                                participationData={participationData}
                                searchByName={searchByName}
                            /> :
                            <tbody>
                                {Array(10).fill(0).map((_, idx) =>
                                    <tr key={idx} className="animate-pulse border border-b-slate-200 odd:bg-white even:bg-gray-50">
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                        <td className="p-4">
                                            <span className='block h-4 bg-slate-300 rounded' />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                    }
                </table>
            </div>
        </div>
    )
}