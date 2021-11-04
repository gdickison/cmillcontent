import Head from "next/dist/shared/lib/head"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/Portfolio.module.css'
import PortfolioSectionTitle from "../components/PortfolioSectionTitle"
import Testimonial from "../components/Testimonial"
import WritingLinkSection from "../components/WritingLink"
import Link from "next/dist/client/link"
import { Fragment } from "react"
import { useState, useEffect } from 'react'
import sanityClient from "../src/client"

function PortfolioPage(){
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolioSection"]{
            _id,
            title,
            subtitle,
            color,
            testimonialText,
            testimonialSource,
            "cards": *[ _type == "portfolioCard" && _id in ^.cards[]._ref ]{
                date,
                title,
                link,
                "imageUrl": image.asset->url
            } | order(_createdAt)
        } | order(_createdAt)`)
        .then((data) => setPortfolioData(data));
    }, []);

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
                {/* Writing Sample Links */}
                {
                    portfolioData && portfolioData.map((data) => {
                        return (
                        <Fragment key={data.title}>
                                <PortfolioSectionTitle
                                    key={data.title}
                                    title={data.title}
                                    subtitle={data.subtitle}
                                />
                                {data.cards ? console.log(data.cards) : console.log('no cards for ' + data._id)}
                                <WritingLinkSection color={'var(--color-' + data.color + ')'} cardData={data.cards} />
                                {data.testimonialText
                                    ? <Testimonial
                                        testimonial={data.testimonialText}
                                        source={data.testimonialSource}
                                    />
                                    : <div className={styles.placeholder}/>
                                }
                            </Fragment>
                        )
                    })
                }
                {/* United Dairymen of AZ video section */}
                <PortfolioSectionTitle
                    title="United Dairymen of Arizona"
                    subtitle="90 second video script"
                />
                <div style={{margin: '0 16%'}}>
                    <div className={styles.videoContainer}>
                        <iframe className={styles.video} controls width={720} height={576} src="https://www.youtube.com/embed/Z2S5a8hK7m0"/>
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