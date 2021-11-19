import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

function CrocodilesPage() {
    return(
        <div className="page-container">
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className="content-wrapper">
                <div className="crocodiles-headerWrapper">
                    <div className="crocodiles-headerTextContainer">
                        <h1 className="crocodiles-title">
                            Crocodiles
                        </h1>
                    </div>
                </div>
                <div className="crocodiles-underBookshelf">
                    <div className="crocodiles-left">
                        <span className="crocodiles-crocImage">
                            <Image src="/images/icon_crocodiles.png" alt="shelf of crocodiles" width={265} height={265}/>
                        </span>
                    </div>
                    <div className="crocodiles-right">
                    <div className="crocodiles-rightChild">
                        <div className="crocodiles-crocText">
                            <p>
                                <strong>LOVE READING?</strong>
                            </p>
                            <p>
                                So do I.
                            </p>
                            <p>
                                Fist bump.
                            </p>
                            <p>
                                For a tasty essay on books and ideas, check out <a className="inline-link" href="https://crocodileshelf.substack.com/" target="_blank" rel="noreferrer">Shelf of Crocodiles</a>, my monthly newsletter on <a className="inline-link" href="https://substack.com/" target="_blank" rel="noreferrer">Substack</a>.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CrocodilesPage;