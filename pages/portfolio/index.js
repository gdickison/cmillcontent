import NavBar from "../../components/Navbar"
import Head from "next/dist/shared/lib/head"
import Footer from "../../components/Footer"
import Image from "next/dist/client/image"
import styles from '../../styles/Portfolio.module.css'
import PortfolioContentCard from "../../components/PortfolioContentCard"

function PortfolioPage() {
    return (
        <div>
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
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
                        <div className={styles.contentTitleContainer}>
                            <p className={styles.contentTitle}>Dare Capital Blog</p>
                            <p className={styles.contentSubtitle}>Co-authored with Dare Capital CEO Cole Harmonson and the Resound team</p>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.cardContainer}>
                                <PortfolioContentCard
                                    date="August 2021"
                                    title="Everyday Heroes"
                                    image="/images/image_everyday_heroes.png"
                                />
                                <PortfolioContentCard
                                    date="July 2021"
                                    title="Risking, Conquering, and Jolly Punches"
                                    image="/images/image_bridge.png"
                                />
                                <PortfolioContentCard
                                    date="May 2021"
                                    title="Allies and Enemies"
                                    image="/images/image_wolves.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonialSection}>
                        <div className={styles.testimonialBorder}>
                            <hr/>
                        </div>
                        <div className={styles.testimonialContainer}>
                            <p className={styles.testimonialText}>"Curtis is able to bring depth to any project. He doesn&apos;t stop until he finds something interesting to say, even if that means he has to go deep. Because he always emerges with a clever, simple insight that works. This is not something you can teach.&quot;</p>
                            <p className={styles.testimonialSource}>- Chris Stadler, Resound Creative Media</p>
                        </div>
                        <div className={styles.testimonialBorder}>
                            <hr/>
                        </div>
                    </div>
                    <div className={styles.contentSubSection}>
                        <div className={styles.contentTitleContainer}>
                            <p className={styles.contentTitle}>Arizona Milk Producers Blog</p>
                            <p className={styles.contentSubtitle}>Featured monthly blog</p>
                        </div>
                        <div className={styles.contentSubContainer}>
                            <div className={styles.cardContainer}>
                                <PortfolioContentCard
                                    date="September 2021"
                                    title="Going Camping? Out in the wild, dairy ups the ante"
                                    image="/images/image_campers.png"
                                />
                                <PortfolioContentCard
                                    date="July 2021"
                                    title="Milk in the Summertime - a Splendid Choice"
                                    image="/images/image_girl.png"
                                />
                                <PortfolioContentCard
                                    date="June 2021"
                                    title="Even in Summer Heat, AZ Cows are Happier than you Think"
                                    image="/images/image_wolves.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonialSection}>
                        <div className={styles.testimonialBorder}>
                            <hr/>
                        </div>
                        <div className={styles.testimonialContainer}>
                            <p className={styles.testimonialText}>“Curtis gets it. He understands what we are looking for. He's excellent to work with and highly recommended.”</p>
                            <p className={styles.testimonialSource}>- Cole Harmonson, Co-Founder and CEO, Dare Capital</p>
                        </div>
                        <div className={styles.testimonialBorder}>
                            <hr/>
                        </div>
                    </div>
            <Footer />
        </div>
    );
}

export default PortfolioPage;