import Head from "next/head"
import Image from "next/image"
import Link from "next/dist/client/link"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import FictionContentCard from "../components/FictionContentCard"
import StagePlaysContentCard from "../components/StagePlaysContentCard"

function CreativePage() {
    return(
        <div className="page-container">
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className="content-wrapper">
                <div className="creative-headerWrapper">
                    <div className="creative-headerTextContainer">
                        <h1 className="creative-title">
                            Creative
                        </h1>
                        <div className="creative-subtitle">
                            <p>
                                For a decent stretch, I’ve been writing plays, sketches, screenplays, essays, and short fiction.
                            </p>
                            <p>
                                Here’s what’s landed—and what’s in the pipeline.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="creative-creativeContent">
                    {/* short film section */}
                    <div className="creative-creativeContentSection">
                        <div className="creative-creativeContentHeader">
                            <span className="creative-creativeContentHeaderIcon">
                                <Image src="/images/icon_film.png" alt="film" width={74} height={61} />
                            </span>
                            <h2 className="creative-creativeContentHeaderText">Short Film</h2>
                        </div>
                        <div className="creative-videoContainer">
                            <iframe className="creative-video" controls width={720} height={576} src="https://www.youtube.com/embed/G55hKNh7NT8" />
                        </div>
                        <div className="creative-videoCaption">
                            <p className="creative-videoTitle">Date Works</p>
                            <p className="creative-videoCredits">Wrote, Produced, and Directed</p>
                            <p className="creative-videoYear">2020</p>
                        </div>
                        <div className="creative-videoContainer">
                            <iframe className="creative-video" controls width={720} height={576} src="https://www.youtube.com/embed/diqkZ-jq1JQ" />
                        </div>
                        <div className="creative-videoCaption">
                            <p className="creative-videoTitle">Gio Boone: Live With Friends</p>
                            <p className="creative-videoCredits">Produced and Directed</p>
                            <p className="creative-videoYear">2021</p>
                        </div>
                    </div>
                    {/* feature film section */}
                    <div className="creative-creativeContentSection">
                        <div className="creative-creativeContentHeader">
                            <span className="creative-creativeContentHeaderIcon">
                                <Image src="/images/icon_feature_film.png" alt="film" width={59} height={70} />
                            </span>
                            <h2 className="creative-creativeContentHeaderText">Feature Film Treatments</h2>
                        </div>
                        <div className="creative-featureFilmContentContainer">
                            <div className="creative-featureFilmContentCard"> {/* repeat the featureFilmContentCard for each new feature film */}
                                <Image className="creative-featureFilmImage" src="/images/image_b_to_a.png" alt="b to a" width={360} height={202} layout="responsive" />
                                <div className="creative-featureFilmCaption">
                                    <p className="creative-featureFilmTitle">B to A</p>
                                    <p className="creative-featureFilmGenre">straight drama</p>
                                    <p className="creative-featureFilmDescription">When a college athlete finds her life uprooted by an unplanned pregnancy, her eccentric, older, army veteran brother lends a helping hand.</p>
                                    <p className="creative-featureFilmDescription">While they navigate the hurdles of returning home, family restoration and the adoption process, a beleaguered couple struggle with infertility clings to hope.</p>
                                    <p>
                                        <a className="inline-link" href="/files/B_to_A_Film_Treatment_2021.pdf" alt="B to A Film Treatment 2021" target="_blank" rel="noopener noreferror">Full Treatment</a>
                                    </p>
                                    <p>
                                        <a className="inline-link" href="/files/B_to_A_Ten_minute_sample_scene.pdf" alt="B to A Ten Minute Sample Scene" target="_blank" rel="noopener noreferror">Sample Scene</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="creative-cardLinkContainer">
                                <p className="creative-cardLinkTitle">Want to see more?</p>
                                <Link href="mailto:curtis@cmillcontent.com" passHref>
                                    <span className="creative-cardLink">contact me</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* fiction & literary section */}
                    <div className="creative-creativeContentSection">
                        <div className="creative-creativeContentHeader">
                            <span className="creative-creativeContentHeaderIcon">
                                <Image src="/images/icon_fiction.png" alt="film" width={63} height={63} />
                            </span>
                            <h2 className="creative-creativeContentHeaderText">Fiction and Literary</h2>
                        </div>
                        <div className="creative-fictionContentContainer">
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
                    <div className="creative-creativeContentSection">
                        <div className="creative-creativeContentHeader">
                            <span className="creative-creativeContentHeaderIcon">
                                <Image src="/images/icon_stage_plays.png" alt="film" width={70} height={74} />
                            </span>
                            <h2 className="creative-creativeContentHeaderText">Stage Plays</h2>
                        </div>
                        <div className="creative-stagePlaysContentContainer">
                            <StagePlaysContentCard
                                title="Packed, Prepared"
                                genre="one act lockdown comedy"
                                // eslint-disable-next-line react/jsx-key
                                description={["Semi-finalist, Kennedy Center American College Theater Festival, ", <a href="https://www.kcactf7.org/" target="_blank" rel="noreferrer">Region VII</a>, ", 2021"]}
                                performance="Staged reading at New Saint Andrews College"
                                link="/files/All_Packed_10_Page_Sample.pdf"
                                target="_blank"
                            />
                            <StagePlaysContentCard
                                title="Antigone"
                                genre="a one act adaptation"
                                performance="Performed on the patio at Restoration Life Church, 2017"
                            />
                            <StagePlaysContentCard
                                title="Six From the Strand"
                                genre="full-length drama"
                                performance="Performed at the Second Story Theater, 2011"
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
                            />
                            <StagePlaysContentCard
                                title="Bombing Hills"
                                genre="full-length drama"
                                performance="Honors thesis; staged reading at U.C. Riverside, 2009"
                            />
                        </div>
                        <div className="creative-stagePlaysLinkContainer">
                            <p className="creative-stagePlaysLinkText">Need a play?</p>
                            <p className="creative-stagePlaysLinkText">For permissions, sample scenes, and more,  <a href='mailto:curtis@cmillcontent.com'>give me a shout</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreativePage;