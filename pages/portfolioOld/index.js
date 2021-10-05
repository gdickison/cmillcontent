import NavBar from "../../components/Navbar"
import Head from "next/dist/shared/lib/head"
import Footer from "../../components/Footer"
import Link from "next/dist/client/link"
import styles from '../../styles/Portfolio.module.css'
import PortfolioContentCard from "../../components/PortfolioContentCard"
import PortfolioSectionTitle from "../../components/PortfolioSectionTitle"
import Testimonial from "../../components/Testimonial"

function PortfolioPage() {
    return (
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
                            Portfolio
                        </h1>
                        <p className={styles.subtitle}>
                            Marketing and Advertising
                        </p>
                    </div>
                </div>
                    <div className={styles.contentSection}>
                        <PortfolioSectionTitle
                            title="Dare Capital Blog"
                            subtitle="Co-authored with Dare Capital CEO Cole Harmonson and the Resound team"
                        />
                        <div className={styles.contentContainer}>
                            <div className={styles.cardContainer}>
                                <PortfolioContentCard
                                    date="August 2021"
                                    title="Everyday Heroes"
                                    link="https://www.darebizcapital.com/post/everyday-hero"
                                    image="/images/image_everyday_heroes.png"
                                />
                                <PortfolioContentCard
                                    date="July 2021"
                                    title="Risking, Conquering, and Jolly Punches"
                                    link="https://www.darebizcapital.com/post/risking-conquering-and-jolly-punches"
                                    image="/images/image_bridge.png"
                                />
                                <PortfolioContentCard
                                    date="May 2021"
                                    title="Allies and Enemies"
                                    link="https://www.darebizcapital.com/post/allies-and-enemies-closer-than-they-appear"
                                    image="/images/image_wolves.png"
                                />
                            </div>
                        </div>
                    </div>
                    <Testimonial
                        testimonial="&quot;Curtis is able to bring depth to any project. He doesn&apos;t stop until he finds something interesting to say, even if that means he has to go deep. Because he always emerges with a clever, simple insight that works. This is not something you can teach.&quot;"
                        source="Chris Stadler, Resound Creative Media"
                    />
                    <div className={styles.contentSecondSection}>
                        <PortfolioSectionTitle
                            title="Arizona Milk Producers Blog"
                            subtitle="Featured monthly blog"
                        />
                        <div className={styles.contentSecondContainer}>
                            <div className={styles.cardContainer}>
                                <PortfolioContentCard
                                    date="September 2021"
                                    title="Going Camping? Out in the wild, dairy ups the ante"
                                    link="https://arizonamilk.org/going-camping-out-in-the-wild-dairy-ups-the-ante/"
                                    image="/images/image_campers.png"
                                />
                                <PortfolioContentCard
                                    date="July 2021"
                                    title="Milk in the Summertime - a Splendid Choice"
                                    link="https://arizonamilk.org/milk-in-the-summertime-a-splendid-choice/"
                                    image="/images/image_girl.png"
                                />
                                <PortfolioContentCard
                                    date="June 2021"
                                    title="Even in Summer Heat, AZ Cows are Happier than you Think"
                                    link="https://arizonamilk.org/even-in-summer-heat-az-cows-are-happier-than-you-think/"
                                    image="/images/image_wolves.png"
                                />
                            </div>
                        </div>
                    </div>
                    <Testimonial
                        testimonial="&quot;Curtis gets it. He understands what we are looking for. He&apos;s excellent to work with and highly recommended.&quot;"
                        source="Cole Harmonson, Co-Founder and CEO, Dare Capital"
                    />
                    <div className={styles.contentThirdSection}>
                        <PortfolioSectionTitle
                            title="Resoundcast Branding"
                            subtitle="Edited and co-written, with content from Resound Creative Media CEO Mike Jones"
                        />
                        <div className={styles.contentThirdContainer}>
                            <div className={styles.cardContainer}>
                                <PortfolioContentCard
                                    date="June 2021"
                                    title="Why Real Brands Can’t Be Invented"
                                    link="https://resoundcreative.com/real-brands-cant-be-invented-arbitrary-branding-part1/"
                                    image="/images/image_bulb.png"
                                />
                                <PortfolioContentCard
                                    date="July 2021"
                                    title="Why Real Brands Can’t Be Invented (Part II)"
                                    link="https://resoundcreative.com/why-real-brands-cant-be-invented-part-2/"
                                    image="/images/image_lies.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.creativeContentSection}>
                        <div className={styles.creativeContentHeader}>
                            <p className={styles.contentTitle}>United Dairyment of Arizona</p>
                        </div>
                        <div className={styles.videoTitleContainer}>
                            <p className={styles.contentSubtitle}>90 second video script</p>
                        </div>
                        <div className={styles.videoContainer}>
                            <iframe className={styles.video} controls width={720} height={576} src="https://www.youtube.com/embed/vnmeyvh5ZhI"/>
                        </div>
                    </div>
                <div className={styles.putMeToWorkContainer}>
                    <Link href="mailto:curtis.miller@biola.edu" passHref>
                        <span className={styles.putMeToWorkButton}>Put Me To Work</span>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PortfolioPage;