import { useEffect, useState } from 'react'
import sanityClient from '../src/client'
import Image from 'next/image'
import Link from 'next/link'

const BrandLogos = () => {
  const [brandLogos, setBrandLogos] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "brandlogos"] {
      _id,
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
            <h2 className="brandLogo-header">BRANDS I&apos;VE WORKED WITH</h2>
          </div>
          <div className="brandLogo-logos">
            {brandLogos.map(data => {
              return (
                <div key={data._id} className="logo">
                  <Link href={data.link}>
                    <a target="_blank">
                      <Image src={data.imageUrl} alt={data.title} width={100} height={100} />
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      }
    </>
  )
}

export default BrandLogos