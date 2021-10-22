import Head from "next/head"
import Link from "next/link"
import Image from "next/dist/client/image"
import NavBar from "../components/Navbar"
import Footer from '../components/Footer'
import styles from '../styles/Bio.module.css'

function BioPage() {
    return (
        <div>
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className={styles.contentWrapper}>
                <div className={styles.bioPageContainer}>
                    <h1 className={styles.bioTitle}>Bio</h1>
                    <div className={styles.authorImage}>
                        <Image src="/images/image_author.png" alt="c m miller" width={265} height={265} />
                    </div>
                    <div className={styles.bioSection}>
                        <div className={styles.bioContainer}>
                            <p>
                                <strong>HEY THERE.</strong>
                            </p>
                            <p>
                                So glad you stopped by.
                            </p>
                            <hr/>
                            <p>
                                I’m a Sacramento-based content writer who isn’t afraid of a little elbow grease. I’m also an editor, a veteran educator, an avid reader, and an elevator pitchin’ creative
                            </p>
                            <p>
                                In past lives I’ve wiped out on surfboards, acted on stages, dabbled in improv comedy, led Bible studies, lived abroad—and hit the books with snarky teenagers for a number of years as an honors English teacher.
                            </p>
                            <p>
                                Recently, I’ve been cutting copy with <a href="https://resoundcreative.com/" target="_blank" rel="noreferrer">Resound Creative Media</a>, and finishing up my M.F.A. in Creative Writing from <a href="https://nsa.edu/" target="_blank" rel="noreferrer">New Saint Andrews College</a>
                            </p>
                            <p>
                                Whether your project’s large or small, in utero or hot to trot, I’m eager to hear about it. I’m positive I can whip your content, copy, script, blog, chapter, or first draft into fighting shape.
                            </p>
                            <p>
                                Like what you see?
                            </p>
                            <p>
                                <a href="mailto:curtis.miller@biola.edu">Give me a shout</a> and let’s get to work.
                            </p>
                        </div>
                    </div>
                    <div className={styles.bioHero}>
                    </div>
                    <div className={styles.backToHomeButtonContainer}>
                        <Link href="/" passHref>
                            <span className={styles.backToHomeButton}>Back To Home</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BioPage;