import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Anil from "@/app/images/team/anil.jpg"
import Muc from "@/app/images/team/mucahit-circle.jpeg"
import Ahmet from "@/app/images/team/ahmet.jpeg"
import Cansu from "@/app/images/team/cansu.jpeg"
import Zeynep from "@/app/images/team/zeynep.jpg"
import Yelce from "@/app/images/team/yelce.jpg"
import Image from "next/image";
import Link from "next/link";
export default function Team() {
    const people = [
        {
            name: 'N. Zeynep Yelçe',
            slug: 'zeynep.yelce',
            role: 'Project Supervisor',
            image: Yelce
        },
        {
            name: 'Anıl Atılgan',
            slug: 'anil.atilgan',
            role: 'Translator',
            image: Anil
        },
        {
            name: 'Zeynep Kabukçu',
            slug: 'zeynep.kabukcu',
            role: 'Translator',
            image: Zeynep,
        },
        {
            name: 'Ahmet Gökhan Kaya',
            slug: 'ahmet.gokhan.kaya',
            role: 'Translator',
            image: Ahmet,
        },
        {
            name: 'Cansu Şimşekler',
            slug: 'cansu.simsekler',
            role: 'Translator',
            image: Cansu,
        },
        {
            name: 'Mücahit Uğur',
            slug: 'mucahit.ugur',
            role: 'Translator',
            image: Muc,
        },
        // More people...
    ]

    return (
        <>
            <Header/>
            <Nav/>
            <div className="bg-white">
                <h2 className="text-lg font-bold tracking-tight sm:text-xl my-8">Our Team</h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-3">
                        <ul role="list" className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <Link href={'/people/' + person.slug} className="hover:no-underline group">
                                        <div className="flex items-center space-x-4 lg:space-x-6">
                                            <Image
                                                className="h-10 w-10 rounded-full lg:h-16 lg:w-16 group-hover:scale-105"
                                                src={person.image}
                                                alt=""/>
                                            <div
                                                className="space-y-1 text-base sm:text-sm font-medium group-hover:font-semibold duration-600 leading-6">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}