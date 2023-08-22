import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";

export default function Index() {
    const articles = [
        {
            id: 1,
            title: 'Cloth',
            author: 'Ceyda Sungur',
            translator: 'Zeynep Kabukçu',
            translator_slug: 'zeynep.kabukcu',
            href: 'bez'
        },
        {
            id: 2,
            title: 'Road',
            author: 'Deniz Kimyon',
            translator: 'Anıl Atılgan',
            translator_slug: 'anil.atilgan',
            href: 'yol'
        },
        {
            id: 3,
            title: 'Stone',
            author: 'Meral Akbaş & Özge Kelekçi',
            translator: 'Cansu Şimşekler',
            translator_slug: 'cansu.simsekler',
            href: 'tas'
        },
        {
            id: 4,
            title: 'Trash',
            author: 'Mehmet Mutlu',
            translator: 'Ahmet Gökhan Kaya',
            translator_slug: 'ahmet.gokhan.kaya',
            href: 'cop'
        },
        {
            id: 5,
            title: 'Tree',
            author: 'Esin Gülsen',
            translator: 'Mücahit Uğur',
            translator_slug: 'mucahit.ugur',
            href: 'agac'
        },
        // More articles...
    ]


    return (
        <>
            <Header/>
            <Nav/>
            <main>
                <h1 className="text-lg my-8">Articles</h1>
                <ul className="discover-posts space-y-4">
                    {articles.map((article) => (
                        <li>
                            <span>#{article.id}</span>
                            <div>
                                <a
                                    target="_blank"
                                    href={'https://100sene100nesne.com/' + article.href}>
                                    {article.title}
                                </a>
                                <small>
                                    {/*<span> (<a href="//blog.briankitano.com">https://blog.briankitano.com</a>)</span>*/}
                                    <br/>
                                    <small>Author: {article.author}, Translator: <a
                                        href={'/people/'+article.translator_slug}>{article.translator}</a>
                                    </small>
                                    {/*<small>Published 6&nbsp;days, 7&nbsp;hours ago</small>*/}
                                </small>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}