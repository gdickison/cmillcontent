import Image from 'next/image'
import Link from 'next/link'
import Loader from "../components/Loader"
import { useState, useEffect, Fragment } from 'react'
import sanityClient from '../src/client'
import PortableText from '@sanity/block-content-to-react'

const HomeCards = () => {
    const [homecardData, setHomecardData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homecards"] | order(_createdAt) {
            _id,
            "iconURL": hc_icon.asset->url,
            hc_header,
            hc_content,
            hc_button_text,
            hc_button_link
        }`)
        .then((data) => setHomecardData(data));
    }, []);

    return (
        <div className="homeCards-cardContainer">
        {!homecardData
            ?
            <Loader />
            :
            homecardData.map((data) => {
                return (
                    <Fragment key={data._id}>
                        <div className="homeCards-card">
                            <div className="homeCards-cardIcon">
                                <Image src={data.iconURL} alt="icon" width={80} height={80} />
                            </div>
                            <h2 className="homeCards-cardHeader">{data.hc_header}</h2>
                            <div className="homeCards-cardContentList">
                                <PortableText
                                    blocks={data.hc_content}
                                />
                            </div>
                            <div className="homeCards-cardLinkContainer">
                                <Link href={data.hc_button_link} passHref>
                                    <span className="homeCards-cardLink">{data.hc_button_text}</span>
                                </Link>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default HomeCards;