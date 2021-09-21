import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/navbar"
import Footer from '../components/Footer'
import styles from '../styles/Bio.module.css'

function BioPage() {
    return (
            <div className="pageContainer">
                <Head>
                    <title>C.M. Miller - Content Writer</title>
                    <link rel="icon" href="/images/curtis_miller_logo.png" />
                </Head>
                <NavBar />
                    <div className={styles.bioPageContainer}>
                    <h1 className={styles.bioTitle}>Bio</h1>
                        <div className={styles.bioHero}>
                        </div>
                        <div className={styles.backToHomeButtonContainer}>
                            <Link href="/" passHref>
                                <span className={styles.backToHomeButton}>Back To Home</span>
                            </Link>
                        </div>
                    </div>
                <Footer />
            </div>
    );
}

export default BioPage;