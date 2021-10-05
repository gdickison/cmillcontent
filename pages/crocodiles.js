import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Crocodiles.module.css'

function CrocodilesPage() {
    return(
        <div className="page-container">
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className="content-wrapper">
                <div className={styles.headerWrapper}>
                    <div className={styles.headerTextContainer}>
                        <h1 className={styles.title}>
                            Crocodiles
                        </h1>
                    </div>
                </div>
                <div className={styles.underBookshelf}>
                    <div className={styles.left}>
                        <span className={styles.crocImage}>
                            <Image src="/images/icon_crocodiles.png" alt="shelf of crocodiles" width={265} height={265}/>
                        </span>
                    </div>
                    <div className={styles.right}>
                    <div className={styles.rightChild}>
                        <div className={styles.crocText}>
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
                                For a tasty essay on books and ideas, check out <a href="https://crocodileshelf.substack.com/" target="_blank" rel="noreferrer">Shelf of Crocodiles</a>, my monthly newsletter on <a href="https://substack.com/" target="_blank" rel="noreferrer">Substack</a>.
                            </p>
                        </div>
                        <div className={styles.subscribeButtonContainer}>
                            <Link href="https://crocodileshelf.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fcrocodileshelf.substack.com%2F" passHref>
                                <span className={styles.subscribeButton}>subscribe for free</span>
                            </Link>
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