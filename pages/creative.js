import Head from "next/head"
import Image from "next/image"
import Link from "next/dist/client/link"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import FictionContentCard from "../components/FictionContentCard"
import StagePlaysContentCard from "../components/StagePlaysContentCard"
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
                {/* short film section */}
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
                {/* feature film section */}
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_feature_film.png" alt="film" width={59} height={70} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Feature Film Treatments</h2>
                    </div>
                    <div className={styles.featureFilmContentContainer}>
                        <div className={styles.featureFilmContentCard}>
                            <Image src="/images/image_b_to_a.png" alt="b to a" width={360} height={202} layout="responsive" />
                            <div className={styles.featureFilmCaption}>
                                <p className={styles.featureFilmTitle}>B to A</p>
                                <p className={styles.featureFilmGenre}>straight drama</p>
                                <p className={styles.featureFilmDescription}>When a self-reliant college athlete finds her life uprooted by an unplanned pregnancy, an oddball older brother helps her navigate the hurdles of returning home, pregnancy and adoption, and family restoration. </p>
                            </div>
                        </div>
                        <div className={styles.featureFilmContentCard}>
                            <Image src="/images/image_pivot_knowledge.png" alt="pivot knowledge" width={360} height={202} layout="responsive" />
                            <div className={styles.featureFilmCaption}>
                                <p className={styles.featureFilmTitle}>Pivot Knowledge</p>
                                <p className={styles.featureFilmGenre}>thriller/heist</p>
                                <p className={styles.featureFilmDescription}>To prevent a genocide, an American agent and her team travel back in time to convince a young, imprisoned radical and future Eastern Bloc dictator, to abandon his hate-fueled beliefs.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.cardLinkContainer}>
                            <p className={styles.cardLinkTitle}>Want to see more?</p>
                            <Link href="mailto:curtis@cmillcontent.com" passHref>
                                <span className={styles.cardLink}>contact me</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* fiction & literary section */}
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_fiction.png" alt="film" width={63} height={63} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Fiction and Literary</h2>
                    </div>
                    <div className={styles.fictionContentContainer}>
                        <FictionContentCard
                            title="Both Feet"
                            link="https://deadmule.com/curtis-miller-fiction-dec-2020-2/"
                            genre="short fiction"
                            // eslint-disable-next-line react/jsx-key
                            description={["Published in ", <a href="https://deadmule.com/" target="_blank" rel="noreferrer">Dead Mule School of Southern Literature</a>, ", Dec 2020"]}
                        />
                        <FictionContentCard
                            title="Entradero"
                            genre="short fiction"
                            // eslint-disable-next-line react/jsx-key
                            description={["Published in ", <a href="https://mosaiczine.com/" target="_blank" rel="noreferrer">Mosaic Art and Literary Journal</a>, ", Vol 49, 2010"]}
                        />
                        <FictionContentCard
                            title="Camden Angel"
                            genre="creative nonfiction"
                            // eslint-disable-next-line react/jsx-key
                            description={["Finalist, 2011 Vandermey Nonfiction Contest, ", <a href="https://www.ruminatemagazine.com/" target="_blank" rel="noreferrer">Ruminate Magazine</a>]}
                        />
                        <FictionContentCard
                            title="One Shot North"
                            genre="novel in development"
                        />
                    </div>
                </div>
                {/* stage plays section */}
                <div className={styles.creativeContentSection}>
                    <div className={styles.creativeContentHeader}>
                        <span className={styles.creativeContentHeaderIcon}>
                            <Image src="/images/icon_stage_plays.png" alt="film" width={70} height={74} />
                        </span>
                        <h2 className={styles.creativeContentHeaderText}>Stage Plays</h2>
                    </div>
                    <div className={styles.stagePlaysContentContainer}>
                        <StagePlaysContentCard
                            title="Packed, Prepared"
                            genre="one act lockdown comedy"
                            // eslint-disable-next-line react/jsx-key
                            description={["Semi-finalist, Kennedy Center American College Theater Festival, ", <a href="https://www.kcactf7.org/" target="_blank" rel="noreferrer">Region VII</a>, ", 2021"]}
                            performance="Staged reading at New Saint Andrews College"
                            link="#"
                        />
                        <StagePlaysContentCard
                            title="Antigone"
                            genre="a one act adaptation"
                            performance="Performed on the patio at Restoration Life Church, 2017"
                            link="#"
                        />
                        <StagePlaysContentCard
                            title="Six From the Strand"
                            genre="full-length drama"
                            performance="Performed at the Second Story Theater, 2011"
                            link="#"
                        />
                        <StagePlaysContentCard
                            title="Ten-Minute Plays"
                            // eslint-disable-next-line react/jsx-key
                            description={[<ul>
                            <li>
                                The French Reality
                            </li>
                            <li>
                                Fate, Necessity, and Patrick&apos;s Soul
                            </li>
                            <li>
                                Pasadena
                            </li>
                            <li>
                                The Tide Law
                            </li>
                            </ul>]}
                            performance="Performed by the Golden Mean Players, at the Second Story Theater, and in workshops at the University of London, Royal Holloway, 2007-2010."
                            link="#"
                        />
                        <StagePlaysContentCard
                            title="Bombing Hills"
                            genre="full-length drama"
                            performance="Honors thesis; staged reading at U.C. Riverside, 2009"
                            link="#"
                        />
                    </div>
                    <div className={styles.stagePlaysLinkContainer}>
                        <p className={styles.stagePlaysLinkText}>Need a play?</p>
                        <p className={styles.stagePlaysLinkText}>for permissions and more, <a href='mailto:curtis@cmillcontent.com'>contact me</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreativePage;