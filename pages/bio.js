import Head from "next/head"
import Link from "next/link"
import Image from "next/dist/client/image"
import Loader from "../components/Loader"
import { Fragment } from 'react'
import sanityClient from '../src/client'
import PortableText from '@sanity/block-content-to-react'

function BioPage({bio}) {

  if(!bio){
    return (
      <Loader/>
    )
  }

  return (
    <div className="page-container">
      <Head>
        <title>C.M. Miller - Content Writer</title>
        <link rel="icon" href="/images/curtis_miller_logo.png" />
      </Head>
      <div className="bio-content-wrapper">
        <div className="bioPageContainer">
          <div className="bioHero"/>
          <h1 className="bioTitle">Bio</h1>
          <div className="bioUnderTitle">
            {!bio
              ?
              <Loader />
              :
              bio.map((data) => {
                const serializers = {
                  marks: {
                    link: ({ children, mark }) => <a className="inline-link" href={mark.href} target="_blank" rel="noreferrer">{children}</a>,
                    mailLink: ({ children, mark }) => <a className="inline-link" href={mark.href}>{children}</a>
                  }
                }

                return (
                  <Fragment key={data._id}>
                    <div className="authorImage">
                      <Image src={data.bioImageUrl} alt="c m miller" width={265} height={265} />
                    </div>
                    <div className="bioSection">
                      <div className="bioContainer">
                        <PortableText
                          blocks={data.bio_text}
                          serializers={serializers}
                        />
                      </div>
                    </div>
                  </Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="backToHomeButtonContainer">
        <Link href="/" passHref>
          <span className="backToHomeButton">Back To Home</span>
        </Link>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const bio = await sanityClient.fetch(`*[_type == "bio"] {
    _id,
    "bioImageUrl": bio_image.asset->url,
    bio_text
  }`)

  return {
    props: {bio}
  }
}

export default BioPage;