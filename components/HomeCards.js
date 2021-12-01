import Image from 'next/image'
import Link from 'next/link'
import Loader from "../components/Loader"
import { useState, useEffect, Fragment } from 'react'
import sanityClient from '../src/client'
import PortableText from '@sanity/block-content-to-react'

const HomeCards = () => {
    const [homecardData, setHomecardData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "homecards"] {
            _id,
            hc_1_header,
            hc_1_text,
            hc_2_header,
            hc_2_text,
            hc_3_header,
            hc_3_text
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
                                <Image src="/images/icon_megaphone.png" alt="megaphone" width={80} height={80} />
                            </div>
                            <h2 className="homeCards-cardHeader">{data.hc_1_header}</h2>
                            <div className="homeCards-cardContentList">
                                <PortableText
                                    blocks={data.hc_1_text}
                                />
                            </div>
                            <div className="homeCards-cardLinkContainer">
                                <Link href="/portfolio" passHref>
                                    <span className="homeCards-cardLink">Visit Portfolio</span>
                                </Link>
                            </div>
                        </div>
                        <div className="homeCards-card">
                            <div className="homeCards-cardIcon">
                                <Image src="/images/icon_monitor.png" alt="megaphone" width={80} height={80} />
                            </div>
                            <h2 className="homeCards-cardHeader">{data.hc_2_header}</h2>
                            <div className="homeCards-cardContentList">
                                <PortableText
                                    blocks={data.hc_2_text}
                                />
                            </div>
                            <div className="homeCards-cardLinkContainer">
                                <Link href="/creative" passHref>
                                    <span className="homeCards-cardLink">Visit Creative</span>
                                </Link>
                            </div>
                        </div>
                        <div className="homeCards-card">
                            <div className="homeCards-cardIcon">
                                <Image src="/images/icon_book.png" alt="megaphone" width={80} height={80} />
                            </div>
                            <h2 className="homeCards-cardHeader">{data.hc_3_header}</h2>
                            <div className="homeCards-cardContentList">
                                <PortableText
                                    blocks={data.hc_3_text}
                                />
                            </div>
                            <div className="homeCards-cardLinkContainer">
                                <Link href="/crocodiles" passHref>
                                    <span className="homeCards-cardLink">Visit Blog</span>
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