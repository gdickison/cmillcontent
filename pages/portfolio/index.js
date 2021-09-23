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
            <Footer />
        </div>
    );
}

export default PortfolioPage;