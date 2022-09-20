/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import sanityClient from '../src/client'
import Image from 'next/image'
import Link from 'next/link'

const BrandLogos = () => {
  const [brandLogos, setBrandLogos] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "brandlogos"] {
      _id,
      clientType,
      title,
      link,
      "imageUrl": image.asset->url
    }`)
    .then(data => setBrandLogos(data))
  }, []);

  return (
    <>
      {brandLogos.length > 0 &&
        <div className="brandLogo-wrap">
          <div>
            <h2 className="brandLogo-header">Brands I&apos;ve worked with</h2>
          </div>
          <div className="brandLogo-logos">
            <h2 className="brandLogo-sectionHeader">Agencies</h2>
            <div className='brandLogo-lineup'>
              {brandLogos.map(data => {
                if(data.clientType === 'agency'){
                  return (
                    <div key={data._id} className="logo">
                      <div className="brand-logo">
                        <Link href={data.link ? data.link : "#"}>
                          <a target={data.link ? "_blank" : ""}>
                            <img className="logo-image" src={data.imageUrl} alt={data.title} />
                          </a>
                        </Link>
                        <p className="brandLogo-caption">{data.title}</p>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className="brandLogo-logos">
            <h2 className="brandLogo-sectionHeader">Brands</h2>
            <div className="brandLogo-lineup">
              {brandLogos.map(data => {
                if(data.clientType === 'brand'){
                  return (
                    <div key={data._id} className="logo">
                      <Link href={data.link ? data.link : "#"}>
                        <a target={data.link ? "_blank" : ""}>
                          <img className="logo-image" src={data.imageUrl} alt={data.title} />
                        </a>
                      </Link>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default BrandLogos