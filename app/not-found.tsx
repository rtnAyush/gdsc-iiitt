import Link from "next/link";

export default function NotFound() {
    return (
        <div className="container flex flex-col gap-3 justify-center items-center h-100" style={{ minHeight: '60vh' }}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <button className="btn-secondry"><Link href="/">Return Home</Link></button>
        </div>
    )
}
