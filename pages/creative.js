import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Creative.module.css'

function CreativePage() {
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
                        Creative
                    </h1>
                    <div className={styles.subtitle}>
                        <p>
                            For a decent stretch, I’ve been writing plays, sketches, screenplays, essays, and short fiction.
                        </p>
                        <p>
                            Here’s what’s landed—and what’s in the pipeline.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreativePage;