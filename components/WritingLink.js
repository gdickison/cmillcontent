const WritingLinkCard = ({date, link, title, image}) => {
  return (
    <a className="writingLinkCard-card" href={link} target="_blank" rel="noreferrer">
      <div className="writingLinkCard-cardTitleContainer">
        <p className="writingLinkCard-cardDate">
          {date}
        </p>
        <p className="writingLinkCard-cardTitle">
          {title}
        </p>
      </div>
      <div className="writingLinkCard-cardImageContainer" style={{backgroundImage: "url(" + image + ")"}}></div>
    </a>
  );
}

const WritingLinkSection = ({color, cardData}) => {
  return (
    <div className="writingLinkSection">
      <div className="writingLinkSection-container" style={{backgroundColor: color}}>
        <div className="writingLinkSection-cardContainer">
          {cardData.map((data) => {
            return (
              <WritingLinkCard
                key={data.link.substr(-20)}
                date={data.date}
                link={data.link}
                title={data.title}
                image={data.imageUrl}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default WritingLinkSection;