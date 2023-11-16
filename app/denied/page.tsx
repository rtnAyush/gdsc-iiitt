import Link from "next/link"

export default function Denied() {
    return (
        <section className="flex flex-col justify-center gap-12 items-center" style={{ minHeight: "65vh" }}>
            <h1 className="text-5xl text-red-500">Access Denied</h1>
            <p className="text-xl max-w-2xl text-center text-gray-600">You are logged in, but you do not have the
                required access level to view this page.
            </p>
            <div>
                <Link href="/" className='border bg-gray-600 text-white rounded-md p-2 cursor-pointer hover:bg-gray-500'>Return to Home Page</Link>
                <Link href="/api/auth/signout" className='ms-2 border bg-blue-600 text-white rounded-md p-2 cursor-pointer hover:bg-blue-500'>Login with different account</Link>
            </div>
        </section>
    )
}