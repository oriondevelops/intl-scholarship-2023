import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";

export default function Home() {
    return (
        <>
            <Header />
            <main className="my-4">
                <h2 className="text-sm">As the centennial of the Turkish Republic is fast approaching, this
                    project involves the collection and translation of a given set of informative articles in Turkish.
                    The main body of the articles in the collection is expected to come from an alternative online
                    encyclopedia project <a href="https://100sene100nesne.com/" target="_blank">“100 sene 100 nesne”</a> focusing on objects reflecting the hundred years of the
                    Turkish Republic. The collection will be translated into English to be published as a special
                    dossier in an international academic journal in 2023.</h2>
                <h3 className="mt-4 text-sm">Translated articles for the 2023 summer term are: "Cloth", "Road", "Stone", "Garbage", and
                    "Tree".
                </h3>
            </main>
            <Nav />
        </>
    )
}
