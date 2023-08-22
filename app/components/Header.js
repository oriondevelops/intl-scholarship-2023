import Image from "next/image";
import PureLogo from "@/app/images/pure-logo.png";
import Link from 'next/link'

export default function Header() {
    return (
        <header className="my-4">
            <h1>
                        <span className="title-bear">
                            <a href="https://pure.sabanciuniv.edu/project/8406/internationalizing-scholarship-turkish" target="_blank">
                                <Image src={PureLogo}
                                       priority
                                       className="w-auto h-28 md:h-36 -mx-4 hover:scale-105 duration-1000"
                                       alt="Internationalizing Scholarship in Turkish | PURE"/>
                            </a>
                        </span>
                <Link className="title no-underline hover:scale-105 duration-1000"
                   href="/">
                    Internationalizing Scholarship in Turkish - Summer 2023
                </Link>
            </h1>

            <nav>
            </nav>
        </header>
    )
}