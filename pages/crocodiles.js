import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navbar"
import Footer from "../components/Footer"
import styles from '../styles/Crocodiles.module.css'

function CrocodilesPage() {
    return(
        <div>
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
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
                            For a tasty essay on books and ideas, check out Shelf of Crocodiles, my monthly newsletter on Substack.
                        </p>
                    </div>
                    <div className={styles.subscribeButtonContainer}>
                        <Link href="#" passHref>
                            <span className={styles.subscribeButton}>subscribe for free</span>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CrocodilesPage;