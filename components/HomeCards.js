import Image from 'next/image'
import Link from 'next/link'
import Loader from "../components/Loader"
import { Fragment } from 'react'
import PortableText from '@sanity/block-content-to-react'

const HomeCards = ({homeCardData}) => {

  return (
    <div className="homeCards-cardContainer">
    {!homeCardData
      ?
      <Loader />
      :
      homeCardData.map((data) => {
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