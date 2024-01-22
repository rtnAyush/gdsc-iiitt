"use client";
import { useEffect, useState } from 'react';
import TableRow from './TableRow';


export default function TableBody({ participationData, searchByName }: { participationData: any[], searchByName: string }) {

    const [maxCourseComp, setMaxCourseComp] = useState<number[]>([]);

    useEffect(() => {
        if (!searchByName) {
            calculateRanking(participationData);
        }
        // eslint-disable-next-line
    }, [])

    const calculateRanking = (data: any[]) => {

        const sums: number[] = [];
        data.forEach((ele) => {
            const sum = ele['of_courses_completed'] + ele['of_skill_badges_completed'] + ele['of_gen_ai_game_completed'];
            if (!sums.includes(sum)) {
                sums.push(sum);
            }
        });

        sums.sort((a, b) => b - a);

        setMaxCourseComp(sums.slice(0, 3));
    }

    return (
        <tbody className='text-xs '>
            {
                participationData?.length !== 0 ? participationData.map((participant) => {

                    return <TableRow
                        maxCourseComp={maxCourseComp}
                        key={participant["student_email"] || 1}
                        participant={participant}
                    />
                }) :

                    <tr className="border-b-slate-200 odd:bg-white even:bg-gray-50">
                        <td className='p-4 whitespace-nowrap'>No Data Found</td>
                    </tr>

            }
        </tbody >
    )
}