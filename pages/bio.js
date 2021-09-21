import Head from "next/head";
import Link from "next/link";
import Image from "next/dist/client/image";
import NavBar from "../components/Navbar"
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
                        <div className={styles.authorImage}>
                            <Image src="/images/image_author.png" alt="c m miller" width={265} height={265} />
                        </div>
                        <div className={styles.bioSection}>
                            <div className={styles.bioContainer}>
                                <p>
                                    <strong>HEY THERE.</strong>
                                </p>
                                <p>
                                    I’m C.M. Miller. 
                                </p>
                                <p>
                                    So glad you stopped by. 
                                </p>
                                <hr/>
                                <p>
                                    Originally from SoCal, I’m a Sacramento-based content writer who isn’t afraid of a little elbow grease. I’m also a husband, a traveler, and a novel writin,’ elevator pitchin’ creative.
                                </p>
                                <p>
                                    In past lives I’ve wiped out on surfboards, acted on stages, scribbled plays, stories, and articles, dabbled in improv and sketch comedy, lived abroad, graduated with honors from U.C. Riverside—and hit the books with snarky teenagers as an English Teacher. 
                                </p>
                                <p>
                                    Through it all, I’ve found guiding light in the Gospel of John, chapter three, and in Saint Paul’s letter to the Romans, chapters one through five. 
                                </p>
                                <p>
                                    And The Office... plenty of light from Dwight and Michael. 
                                </p>
                                <p>
                                    I started cutting copy with <a href="https://resoundcreative.com/bio/curtis-miller/" target="_blank" rel="noreferrer">Resound Creative Media</a> in 2021, ghostwriting a blog or two while finishing up my M.F.A. in Creative Writing from <a href="https://nsa.edu" target="_blank" rel="noreferrer">New Saint Andrews College</a>. 
                                </p>
                                <p>
                                    Now, I’m doing this full time.  
                                </p>
                                <p>
                                    Whether your project’s large or small, in utero or hot to trot, I’m ready to <a href="#">have your back</a>. I’m positive I can whip your content, script, draft, newsletter, copy, social, or brainstorm into fighting shape.
                                </p>
                                <p>
                                    Like what you see? You’re gonna love the way you read. 
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
                <Footer />
            </div>
    );
}

export default BioPage;