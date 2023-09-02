'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
    const pathname = usePathname()

    const navLinks = [
        {
            name: "Project",
            href: "/"
        },
        {
            name: "Team",
            href: "/team"
        },
        {
            name: "Articles",
            href: "/articles"
        }
    ]

    return (
        <nav>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <Link
                        className={isActive ? 'hidden' : ''}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}