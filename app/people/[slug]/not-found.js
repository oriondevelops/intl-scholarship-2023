import Link from 'next/link'
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";

export default function NotFound() {
    return (
        <>
            <Header/>
            <Nav/>
            <div className="my-16">
                <h2 className="mb-4">Not Found</h2>
                <p className="mb-4">Could not find the specified person...</p>
                <Link className="mt-4" href="/">Return Home</Link>
            </div>
        </>
    )
}