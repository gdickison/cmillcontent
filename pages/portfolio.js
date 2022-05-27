import Head from "next/dist/shared/lib/head"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import PortfolioSectionTitle from "../components/PortfolioSectionTitle"
import Testimonial from "../components/Testimonial"
import WritingLinkSection from "../components/WritingLink"
import Link from "next/dist/client/link"
import { useState, useEffect, Fragment } from 'react'
import sanityClient from "../src/client"
import Loader from "../components/Loader"
import PortableText from '@sanity/block-content-to-react'

function PortfolioPage(){
    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "portfolioSection"] | order(_createdAt) {
            _id,
            title,
            subtitle,
            color,
            testimonialText,
            testimonialSource,
            "cards": *[ _type == "portfolioCard" && _id in ^.cards[]._ref ] | order(_createdAt) {
                date,
                title,
                link,
                "imageUrl": image.asset->url
            }
        }`)
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
                {!portfolioData
                    ?
                    <Loader />
                    :
                    <>
                        <div className="portfolio-heroBackground"></div><div className="portfolio-heroTitleContainer">
                            <h1 className="portfolio-heroTitle">Portfolio</h1>
                        </div>
                        {portfolioData.map((data) => {
                            const serializers = {
                                marks: {
                                    link: ({ children, mark }) => <a className="inline-link" href={mark.href} target="_blank" rel="noreferrer">
                                        {children}
                                    </a>
                                }
                            }
                            return (
                                <Fragment key={data._id}>
                                    <div className="portfolio-section-contentTitleContainer">
                                        <p className="portfolio-section-contentTitle">{data.title}</p>
                                        <p className="portfolio-section-contentSubtitle">
                                            <PortableText
                                                blocks={data.subtitle}
                                                serializers={serializers}
                                            />
                                        </p>
                                    </div>
                                    <WritingLinkSection color={'var(--color-' + data.color + ')'} cardData={data.cards} />
                                    {data.testimonialText
                                        ? <Testimonial
                                            testimonial={data.testimonialText}
                                            source={data.testimonialSource}
                                        />
                                        : <div className="portfolio-placeholder"/>
                                    }
                                </Fragment>
                            )
                        })}
                        {/* United Dairymen of AZ video section */}
                        <PortfolioSectionTitle
                            title="United Dairymen of Arizona"
                            // eslint-disable-next-line react/jsx-key
                            subtitle={["90 second video script, winner of a ", <a className="inline-link" href='https://enter.marcomawards.com/entry/united-in-excellence/' target='_blank' rel="noreferrer">2021 Gold Marcom Award</a>]}
                        />
                        <div style={{margin: '0 16%'}}>
                            <div className="portfolio-videoContainer">
                                <iframe className="portfolio-video" controls width={720} height={576} src="https://www.youtube.com/embed/Z2S5a8hK7m0"/>
                            </div>
                        </div>
                        <div className="putMeToWorkContainer">
                            <Link href="mailto:cmillcontent@gmail.com" passHref>
                                <span className="putMeToWorkButton">Put Me To Work</span>
                            </Link>
                        </div>
                    </>
                }
            </div>
            <Footer id="portfolio-footer"/>
        </div>
    );
}

export default PortfolioPage;