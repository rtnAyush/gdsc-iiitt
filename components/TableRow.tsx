
export default function TableRow({ participant, maxCourseComp }: { participant: any, maxCourseComp: number[] }) {
    // console.log(participant)
    return (
        <tr className=" border border-b-slate-200 odd:bg-white even:bg-gray-50">
            <td className="Student_Name p-3 uppercase whitespace-nowrap text-sm font-medium">
                {participant["total_completions_of_both_pathways"] === "Yes" ? '🏅' : ''}
                {maxCourseComp[0] === (participant['of_courses_completed'] + participant['of_skill_badges_completed'] + participant['of_gen_ai_game_completed']) ? <span className="text-lg"> 🥇 </span> : ''}
                {maxCourseComp[1] === (participant['of_courses_completed'] + participant['of_skill_badges_completed'] + participant['of_gen_ai_game_completed']) ? <span className="text-lg"> 🥈 </span> : ''}
                {maxCourseComp[2] === (participant['of_courses_completed'] + participant['of_skill_badges_completed'] + participant['of_gen_ai_game_completed']) ? <span className="text-lg"> &#129353; </span> : ''}
                {participant["student_name"]}
            </td>

            {/* <td className="Student_Email p-3">{participant["Student Email"]}</td> */}

            <td className="Redemption_Status p-3 relative">
                <div
                    className={`w-fit m-auto rounded-3xl px-4 py-1 text-center ${participant["redemption_status"] === "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["redemption_status"] === "Yes" ? "Done" : "Error !"}
                </div>
            </td>

            <td className="institution mob:hidden relative p-3">
                <div
                    className={`m-auto w-fit rounded-3xl px-2 py-1 text-center ${participant["institution"] ===
                        "U. V. Patel College of Engineering - Mehsana"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["institution"] ===
                        "Indian Institute of Information Technology (IIIT) - Tiruchirapalli"
                        ? "IIITT"
                        : "Other"}
                </div>
            </td>


            <td className="Completions_both_Pathways_relative p-3 text-center">
                <div
                    className={`m-auto w-fit rounded-3xl px-5 py-1 text-center ${participant["total_completions_of_both_pathways"] === "Yes"
                        ? "bg-green-200 text-green-600"
                        : "bg-yellow-200 text-yellow-600"
                        }`}
                >
                    {participant["total_completions_of_both_pathways"] === "Yes"
                        ? "Yes"
                        : "No !"}
                </div>
            </td>

            <td className="no_Courses_Completed mob:hidden p-3 text-center">
                {participant["of_courses_completed"]}
            </td>

            <td className="no_Skill_Badges_Completed mob:hidden p-3 text-center">
                {participant["of_skill_badges_completed"]}
            </td>

            <td className="GenAI_Game_Completed mob:hidden p-3 text-center">
                {participant["of_gen_ai_game_completed"]}
            </td>


            {/* <td className="Enrolment_Date_Time p-3">
                {participant["enrolment_date_time"]}
            </td> */}

            {/* <td className="Enrolment_Status p-3">{participant["enrolment_status"]}</td> */}

            {/* <td className="Profile_URL p-3">
        {participant["google_cloud_skills_boost_profile_url"]}
      </td> */}



        </tr>
    );
}