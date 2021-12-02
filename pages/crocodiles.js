import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import { useState, useEffect, Fragment } from 'react'
import sanityClient from '../src/client'
import PortableText from '@sanity/block-content-to-react'

function CrocodilesPage() {
    const [crocodilesData, setCrocodilesData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "crocodiles"] {
            _id,
            crocodiles_text
        }`)
        .then((data) => setCrocodilesData(data));
    }, []);

    return(
        <div className="page-container">
            <Head>
                <title>C.M. Miller - Content Writer</title>
                <link rel="icon" href="/images/curtis_miller_logo.png" />
            </Head>
            <NavBar />
            <div className="content-wrapper">
                <div className="crocodiles-headerWrapper">
                    <div className="crocodiles-headerTextContainer">
                        <h1 className="crocodiles-title">
                            Crocodiles
                        </h1>
                    </div>
                </div>
                <div className="crocodiles-underBookshelf">
                    <div className="crocodiles-crocImage">
                        <Image src="/images/icon_crocodiles.png" alt="shelf of crocodiles" width={265} height={265}/>
                    </div>
                    <div className="crocodiles-crocTextContainer">
                        {!crocodilesData
                            ?
                            <Loader />
                            :
                            crocodilesData.map((data) => {
                                const serializers = {
                                    marks: {
                                        link: ({ children, mark }) => <a className="inline-link" href={mark.href} target="_blank" rel="noreferrer">{children}</a>
                                    }
                                }

                                return (
                                    <div key={data._id} className="crocodiles-crocText">
                                        <PortableText
                                            blocks={data.crocodiles_text}
                                            serializers={serializers}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer id="crocodiles-footer"/>
        </div>
    );
}

export default CrocodilesPage;