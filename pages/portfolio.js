import Head from "next/dist/shared/lib/head"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Portfolio.module.css'
import PortfolioSectionTitle from "../components/PortfolioSectionTitle"
import Testimonial from "../components/Testimonial"
import WritingLinkSection from "../components/WritingLink"
import Link from "next/dist/client/link"
import { dareCapital, arizonaMilk, resoundcastBranding, radicalRick } from "../public/data/dummydata"

function PortfolioPage(){
    return (
        <div className="page-container">
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className="content-wrapper">
                {/* Hero */}
                <div className={styles.heroBackground}></div>
                <div className={styles.heroTitleContainer}>
                    <h1 className={styles.heroTitle}>Portfolio</h1>
                    <h2 className={styles.heroSubtitle}>Marketing and Advertising</h2>
                </div>
                {/* Radical Rick Section */}
                <PortfolioSectionTitle
                    title="Radical Rick BMX"
                    subtitle="Bi-monthly blog, with visual content by Radical Rick creator Damian Fulton"
                />
                <WritingLinkSection color="var(--color-light)" cardData={radicalRick} />
                {/* Dare Capital Blog Section */}
                <PortfolioSectionTitle
                    title="Dare Capital Blog"
                    subtitle="Co-authored with CEO Cole Harmonson"
                />
                <WritingLinkSection color="var(--color-lightest)" cardData={dareCapital} />
                <Testimonial
                    testimonial="&quot;Curtis is able to bring depth to any project. He doesn&apos;t stop until he finds something interesting to say, even if that means he has to go deep. Because he always emerges with a clever, simple insight that works. This is not something you can teach.&quot;"
                    source="Chris Stadler, Resound Creative Media"
                />
                {/* AZ Milk Producers Blog Section */}
                <PortfolioSectionTitle
                    title="Arizona Milk Producers Blog"
                    subtitle="Featured monthly blog"
                />
                <WritingLinkSection color="var(--color-dark)" cardData={arizonaMilk} />
                <Testimonial
                    testimonial="&quot;Curtis gets it. He understands what we are looking for. He&apos;s excellent to work with and highly recommended.&quot;"
                    source="Cole Harmonson, Co-Founder and CEO, Dare Capital"
                />
                {/* Resound Broadcasting Blog Section */}
                <PortfolioSectionTitle
                    title="Resoundcast Branding"
                    subtitle="Edited and co-written with Resound CEO Mike Jones"
                />
                <WritingLinkSection color="var(--color-medium)" cardData={resoundcastBranding} />
                {/* United Dairymen of AZ video section */}
                <PortfolioSectionTitle
                    title="United Dairymen of Arizona"
                    subtitle="90 second video script"
                />
                <div style={{margin: '0 16%'}}>
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