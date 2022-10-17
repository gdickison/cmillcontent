const FictionContentCard = ({title, genre, description, link}) => {
  return (
    <div className="creative-fictionContentCard">
      <div className="creative-fictionContentCardGrid">
        <div className="creative-fictionContentCardContents" id="fl-title">
          <p className="creative-fictionTitle">
            <a href={link} target="_blank" rel="noreferrer">{title}</a>
          </p>
          <p className="creative-fictionGenre">
            {genre}
          </p>
        </div>
        <div className="creative-fictionContentCardContents" id="fl-description">
          <div className="creative-fictionDescription">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FictionContentCard;