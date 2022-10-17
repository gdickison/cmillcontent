/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Image from "next/image"
import Link from "next/dist/client/link"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import FictionContentCard from "../components/FictionContentCard"
import StagePlaysContentCard from "../components/StagePlaysContentCard"
import Loader from "../components/Loader"
import { Fragment } from 'react'
import sanityClient from '../src/client'
import getYouTubeId from 'get-youtube-id'
import PortableText from '@sanity/block-content-to-react'

function CreativePage({shortFilmData, featureFilmData, fictionData, stagePlayData, stagePlaysPdf, subheadText}) {

  return(
    <div>
      <Head>
        <title>C.M. Miller - Content Writer</title>
        <link rel="icon" href="/images/curtis_miller_logo.png" />
      </Head>
      <NavBar />
      <div>
        <div className="creative-headerWrapper">
          <div className="creative-headerTextContainer">
            <h1 className="creative-title">
              Creative
            </h1>
            <div className="creative-subtitle">
              <p>{subheadText.creative_subhead_text}</p>
            </div>
          </div>
        </div>
        <div className="creative-creativeContent">
          {!shortFilmData
            ?
            <Loader />
            :
            <div className="creative-creativeShortFilmSection">
              <div className="creative-creativeContentHeader">
                <span className="creative-creativeContentHeaderIcon">
                  <Image src="/images/icon_film.png" alt="film" width={74} height={61} />
                </span>
                <h2 className="creative-creativeContentHeaderText">Short Film</h2>
              </div>
              {shortFilmData.map((data) => {
                const youTubeId = getYouTubeId(data.link);

                return (
                  <Fragment key={data._id}>
                    <div className="creative-videoContainer">
                      <iframe className="creative-video" controls width={720} height={576} src={`https://youtube.com/embed/${youTubeId}`} />
                    </div>
                    <div className="creative-videoCaption">
                      <p className="creative-videoTitle">{data.title}</p>
                      <p className="creative-videoCredits">{data.roles}</p>
                      <p className="creative-videoYear">{data.year}</p>
                    </div>
                  </Fragment>
                )
              })}
            </div>
          }
          {!featureFilmData
            ?
            <Loader />
            :
            <div className="creative-creativeFeatureFilmSection">
              <div className="creative-creativeContentHeader">
                <span className="creative-creativeContentHeaderIcon">
                  <Image src="/images/icon_feature_film.png" alt="film" width={59} height={70} />
                </span>
                <h2 className="creative-creativeContentHeaderText">Feature Film Treatments</h2>
              </div>
              <div id={`only-${featureFilmData.length}`} className="creative-featureFilmContentContainer">
                {featureFilmData.map((data) => {
                  return (
                    <Fragment key={data._id}>
                      <div className="creative-featureFilmContentCard">
                        <Image className="creative-featureFilmImage" src={data.filmImageUrl} alt="b to a" width={360} height={202} layout="responsive" />
                        <div className="creative-featureFilmCaption">
                          <p className="creative-featureFilmTitle">
                            <a className="inline-link" href={`${data.fullTreatmentUrl}?dl=`} alt="B to A Film Treatment 2021" target="_blank" rel="noopener noreferrer">{data.title}</a>
                          </p>
                          <p className="creative-featureFilmGenre">{data.genre}</p>
                            <PortableText
                              blocks={data.description}
                              className="creative-featureFilmDescription"
                            />
                          <div className="creative-inline-link-container">
                            {data.fullTreatmentUrl && <p>
                              <a className="inline-link" href={`${data.fullTreatmentUrl}?dl=`} alt="B to A Film Treatment 2021" target="_blank" rel="noopener noreferrer">Full Treatment</a>
                            </p>}
                            {data.sampleSceneUrl && <p>
                              <a className="inline-link" href={`${data.sampleSceneUrl}?dl=`} alt="B to A Ten Minute Sample Scene" target="_blank" rel="noopener noreferrer">Sample Scene</a>
                            </p>}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )
                })}
              </div>
              <div>
                <div className="creative-cardLinkContainer">
                  <p className="creative-cardLinkTitle">Want to see more?</p>
                  <Link href={`${featureFilmData[0].availableScreenplaysUrl}?dl=`} passHref>
                    <span className="creative-cardLink">Available Screenplays</span>
                  </Link>
                </div>
              </div>
            </div>
          }
          {!fictionData
            ?
            <Loader />
            :
            <div className="creative-creativeContentSection">
              <div className="creative-creativeContentFictionHeader">
                <span className="creative-creativeContentHeaderIcon">
                  <Image src="/images/icon_fiction.png" alt="film" width={63} height={63} />
                </span>
                <h2 className="creative-creativeContentHeaderText">Fiction and Literary</h2>
              </div>
              <div className="creative-fictionContentContainer">
                {fictionData.map((data) => {
                  const serializers = {
                    marks: {
                      link: ({ children, mark }) => <a href={mark.href} target="_blank" rel="noreferrer">{children}</a>
                    }
                  }

                  return (
                    <Fragment key={data._id}>
                      <FictionContentCard
                        title={data.title}
                        link={data.link}
                        genre={data.genre}
                        // eslint-disable-next-line react/jsx-key
                        description={
                          <PortableText
                            blocks={data.description}
                            serializers={serializers}
                          />
                        }
                      />
                    </Fragment>
                  )
                })}
              </div>
            </div>
          }
          {!stagePlayData || !stagePlaysPdf
            ?
            <Loader />
            :
            <div className="creative-creativeContentSection">
              <div className="creative-creativeContentSectionHeader">
                <div className="creative-creativeContentPlaysHeader">
                  <span className="creative-creativeContentHeaderIcon">
                    <Image src="/images/icon_stage_plays.png" alt="film" width={70} height={74} />
                  </span>
                  <h2 className="creative-creativeContentHeaderText">Stage Plays</h2>
                </div>
                <div className="creative-creativeContentLinkHeader">
                  <div className="creative-cardLinkContainer">
                    <Link href={`${stagePlaysPdf[0].availableStagePlaysUrl}?dl=`} passHref>
                      <span className="creative-cardLink">Available Stage Plays</span>
                    </Link>
                  </div>
                </div>
              </div>
                <div className="creative-stagePlaysContentContainer">
                  {stagePlayData.map((data) => {
                    const serializers = {
                      marks: {
                        link: ({ children, mark }) => <a href={mark.href} target="_blank" rel="noreferrer">{children}</a>
                      }
                    }

                    return (
                      <Fragment key={data._id}>
                        <StagePlaysContentCard
                          title={data.title}
                          genre={data.genre}
                          // eslint-disable-next-line react/jsx-key
                          description={
                            <PortableText
                              blocks={data.description}
                              serializers={serializers}
                            />
                          }
                          performance={data.performanceInfo}
                          link={data.sampleURL ? `${data.sampleURL}?dl=sample.pdf` : null}
                        />
                      </Fragment>
                    )
                  })}
                </div>
                <div className="creative-stagePlaysLinkContainer">
                  <p className="creative-stagePlaysLinkText">Need a play?</p>
                  <p className="creative-stagePlaysLinkText">For permissions, sample scenes, and more,  <a href='mailto:cmillcontent@gmail.com'>give me a shout</a>
                  </p>
                </div>
            </div>
          }
        </div>
      </div>
      <Footer id="creative-footer" />
    </div>
  );
}

export const getStaticProps = async () => {
  const shortFilmData = await sanityClient.fetch(`*[_type == "shortFilm"] | order(_createdAt) {
    _id,
    link,
    title,
    roles,
    year
  }`)

  const featureFilmData = await sanityClient.fetch(`*[_type == "featureFilm"] | order(_createdAt) {
    _id,
    "filmImageUrl": filmImage.asset->url,
    title,
    genre,
    description,
    "fullTreatmentUrl": fullTreatment.asset->url,
    "sampleSceneUrl": sampleScene.asset->url,
    "availableScreenplaysUrl": availableScreenplays.asset->url
  }`)

  const fictionData = await sanityClient.fetch(`*[_type == "fiction"] | order(_createdAt) {
    _id,
    title,
    link,
    genre,
    description
  }`)

  const stagePlayData = await  sanityClient.fetch(`*[_type == "stageplays"] | order(_createdAt) {
    _id,
    title,
    genre,
    description,
    performanceInfo,
    "sampleURL" : sample.asset->url
  }`)

  const stagePlaysPdf = await sanityClient.fetch(`*[_type == "pdfDownloads"] {
    _id,
    "availableStagePlaysUrl": availableStagePlays.asset->url
  }`)

  const subheadText = await sanityClient.fetch(`*[_type == "creative_subhead"] {
    _id,
    creative_subhead_text
  }`).then(data => data[0])

  return {
    props: {
      shortFilmData,
      featureFilmData,
      fictionData,
      stagePlayData,
      stagePlaysPdf,
      subheadText
    }
  }
}

export default CreativePage;