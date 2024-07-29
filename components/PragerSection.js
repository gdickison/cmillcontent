/* eslint-disable @next/next/no-img-element */
import PortfolioSectionTitle from "./PortfolioSectionTitle"

export default function PragerSection ({data}) {

  return (
  <>
    <PortfolioSectionTitle
    title="Prager U Kids"
    // eslint-disable-next-line react/jsx-key
    subtitle={["Prager U's 'Around the World' Series from  ", <a className="inline-link" href='https://www.prageru.com/kids/browse' target='_blank' rel="noreferrer">Prager U Kids</a>]}
    />
    {data && data.map(item => {
    return (
      <>
      <div key={item._id}>
        <p className="prager-section-contentTitle">{item.title}</p>
        <div className="prager-section">
        <div className="prager-mag">
          <a href={item.prager_link} target="_blank" rel="noreferrer">
          <img className="prager-img" src={item.imageUrl} alt={item.title} />
          </a>
        </div>
        {item.video_link &&
          <div className="prager-vid">
          <div style={{margin: '0%'}}>
            <div className="prager-videoContainer">
            <iframe className="prager-video" controls width={360} height={576} src={`https://www.youtube.com/embed/${item.video_link.substring(item.video_link.indexOf('=') + 1, item.video_link.indexOf('&'))}`}
            />
            </div>
          </div>
          </div>
        }
        </div>
      </div>
      </>
    )
    })}
  </>
  )
}