import Head from "next/dist/shared/lib/head"
import PortfolioSectionTitle from "../components/PortfolioSectionTitle"
import Testimonial from "../components/Testimonial"
import WritingLinkSection from "../components/WritingLink"
import { Fragment } from 'react'
import sanityClient from "../src/client"
import Loader from "../components/Loader"
import PortableText from '@sanity/block-content-to-react'
import PragerSection from "../components/PragerSection"
import ContactModal from "../components/ContactModal"
import { handleContactClick } from "../public/utils"

function PortfolioPage({portfolioData, pragerData}){

  return (
    <div className="page-container">
      <Head>
        <title>C.M. Miller - Content Writer</title>
        <link rel="icon" href="/images/curtis_miller_logo.png" />
      </Head>
      <div className="content-wrapper">
        {!portfolioData
          ?
          <Loader />
          :
          <>
            <div className="portfolio-heroBackground"></div><div className="portfolio-heroTitleContainer">
              <h1 className="portfolio-heroTitle">Portfolio</h1>
            </div>
            {/* Prager U Section */}
            {!pragerData
              ?
              <Loader />
              :
              <PragerSection
                data={pragerData}
              />
            }
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
                    <div className="portfolio-section-contentSubtitle">
                      <PortableText
                        blocks={data.subtitle}
                        serializers={serializers}
                      />
                    </div>
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
              <span className="putMeToWorkButton" onClick={handleContactClick}>Put Me To Work</span>
            </div>
          </>
        }
      </div>
      <ContactModal/>
    </div>
  );
}

export const getServerSideProps = async () => {

  const [portfolioData, pragerData] = await Promise.all([
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
    }`),
    sanityClient.fetch(`*[_type == "pragerSection"] | order(_createdAt) {
      _id,
      title,
      subtitle,
      "imageUrl": mag_cover_image.asset->url,
      video_link,
      prager_link,
      "pdfLink": pdf_link.asset->url
    }`)
  ])

  return {
    props: {portfolioData, pragerData}
  }
}

export default PortfolioPage;