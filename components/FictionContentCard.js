const FictionContentCard = ({title, genre, description, link}) => {
    return (
        <div className="creative-fictionContentCard">
            <div className="creative-fictionContentCardGrid">
                <div className="creative-fictionContentCardContents">
                    <p className="creative-fictionTitle"><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
                    <p className="creative-fictionGenre">{genre}</p>
                </div>
                <div className="creative-fictionContentCardContents">
                    <p className="creative-fictionDescription">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FictionContentCard;