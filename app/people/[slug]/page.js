"use client"
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import Anil from "@/app/images/team/anil.jpg"
import Mucahit from "@/app/images/team/mucahit.jpg"
import Ahmet from "@/app/images/team/ahmet.jpeg"
import Cansu from "@/app/images/team/cansu.jpeg"
import Zeynep from "@/app/images/team/zeynep.jpg"
import Yelce from "@/app/images/team/yelce.jpg"
import Image from "next/image";
import { notFound } from 'next/navigation'

const people = {
    "zeynep.yelce": {
        name: "N. Zeynep Yelçe",
        role: "Project Supervisor",
        image: Yelce,
        institution: "Sabancı University"
    },
    "anil.atilgan": {
        name: "Anıl Atılgan",
        image: Anil,
        institution: "Bilkent University",
        twitter: "anlatlgnn"
    },
    "zeynep.kabukcu": {
        name: "Zeynep Kabukçu",
        image: Zeynep,
        institution: "Bilgi University"
    },
    "ahmet.gokhan.kaya": {
        name: "Ahmet Gökhan Kaya",
        image: Ahmet,
        institution: "Middle East Technical University"
    },
    "cansu.simsekler": {
        name: "Cansu Şimşekler",
        image: Cansu,
        institution: "Boğaziçi University"
    },
    "mucahit.ugur": {
        name: "Mücahit Uğur",
        image: Mucahit,
        institution: "Boğaziçi University",
        twitter: "oriondevelops",
        linkedin: "mucahitugur"
    },
}

export default function Person({params}) {
    const person = people[params.slug]

    if (!person) {
        notFound()
    }

    return (
        <>
            <Header/>
            <Nav/>
            <div className="space-y-6 mb-4 mt-12 md:mt-18">
                <div className="aspect-w-3 aspect-h-2">
                    {person.image &&
                        <Image
                            className="rounded-lg object-cover shadow-lg w-60 h-40"
                            src={person.image}
                            alt=""/>
                    }
                </div>
                <div className="space-y-1 text-base md:text-lg font-medium leading-6">
                    <h3>{person.name}</h3>
                    <p className="text-indigo-600">{person.role ?? 'Translator'}</p>
                    <p className="text-gray-600">{person.institution}</p>
                </div>
                {person.description &&
                    <div className="text-base md:text-lg">
                        <p className="text-gray-500">{person.description}</p>
                    </div>
                }
                <ul role="list" className="py-2 flex space-x-5">
                    {person.twitter &&
                        <li>
                            <a href={`https://twitter.com/${person.twitter}`}
                               target="_blank"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path
                                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                        </li>
                    }
                    {person.linkedin &&
                        <li>
                            <a href={`https://www.linkedin.com/in/${person.linkedin}`}
                               target="_blank"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                          clipRule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export async function generateStaticParams() {
    return people.map((person) => ({
        slug: person.slug,
    }))
}
