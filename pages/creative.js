import Head from "next/head"
import Image from "next/image"
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
            <div className={styles.creativeContent}>
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_film.png" alt="film" width={74} height={61} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Short Film</h2>
                    </div>
                    <div className={styles.videoContainer}>
                        <iframe className={styles.video} controls width={720} height={576} src="https://www.youtube.com/embed/G55hKNh7NT8" />
                    </div>
                    <div className={styles.videoCaption}>
                        <p className={styles.videoTitle}>Date Works</p>
                        <p className={styles.videoCredits}>Wrote, Produced, and Directed</p>
                        <p className={styles.videoYear}>2020</p>
                    </div>
                    <div className={styles.videoContainer}>
                        <iframe className={styles.video} controls width={720} height={576} src="https://www.youtube.com/embed/diqkZ-jq1JQ" />
                    </div>
                    <div className={styles.videoCaption}>
                        <p className={styles.videoTitle}>Gio Boone: Live With Friends</p>
                        <p className={styles.videoCredits}>Produced and Directed</p>
                        <p className={styles.videoYear}>2021</p>
                    </div>
                </div>
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_feature_film.png" alt="film" width={59} height={70} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Feature Film Treatments</h2>
                    </div>
                </div>
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_fiction.png" alt="film" width={63} height={63} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Fiction and Literary</h2>
                    </div>
                </div>
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_stage_plays.png" alt="film" width={70} height={74} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Stage Plays</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreativePage;