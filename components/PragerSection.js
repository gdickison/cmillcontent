/* eslint-disable @next/next/no-img-element */
import PortfolioSectionTitle from "./PortfolioSectionTitle"

export default function PragerSection () {
  return (
    <>
      <PortfolioSectionTitle
        title="Prager U Kids"
        // eslint-disable-next-line react/jsx-key
        subtitle={["Prager U's 'Around the World' Series from  ", <a className="inline-link" href='https://www.prageru.com/kids/browse' target='_blank' rel="noreferrer">Prager U Kids</a>]}
      />
      <div>
        <p className="prager-section-contentTitle">Marcel Makes a Sacrifice</p>
        <div className="prager-section">
          <div className="prager-mag">
            <a href="https://www.prageru.com/magazine/marcel-makes-a-sacrifice" target="_blank" rel="noreferrer">
              <img className="prager-img" src="/images/canada_around_the_world.png" alt="Canada Around the World" />
            </a>
          </div>
          <div className="prager-vid">
            <div style={{margin: '0%'}}>
              <div className="portfolio-videoContainer">
                <iframe className="portfolio-video" controls width={360} height={576} src="https://www.youtube.com/embed/5vzrh_aNEwA"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="prager-section-contentTitle">Ania&apos;s Energy Crisis</p>
        <div className="prager-section">
          <div className="prager-mag">
            <a href="https://www.prageru.com/magazine/anias-energy-crisis" target="_blank" rel="noreferrer">
              <img className="prager-img" src="/images/poland_around_the_world.jpg" alt="Canada Around the World" />
            </a>
          </div>
          {/* <div className="prager-vid">
            <div style={{margin: '0%'}}>
              <div className="portfolio-videoContainer">
                <iframe className="portfolio-video" controls width={360} height={576} src="https://www.youtube.com/embed/5vzrh_aNEwA"/>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}