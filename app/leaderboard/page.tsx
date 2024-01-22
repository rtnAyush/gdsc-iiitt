import TableIndex from "@/components/leaderBoard/TableIndex";
import { fetchStudentData } from "@/lib/actions/student.action";


export default async function Page() {
    const res = await fetchStudentData();

    if (res?.error) {
        console.log(res.msg);
        return "something went wrong";
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between sm:py-24 py-3 sm:px-24 px-3">
            <TableIndex participationData={res?.data} />
        </main>
    )
}
