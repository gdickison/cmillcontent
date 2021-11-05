const PortfolioContentCard = ({date, title, image, link}) => {
    return(
        <div className="portfolio-content-card-card">
            <div className="portfolio-content-card-cardTitleContainer">
                <p className="portfolio-content-card-cardDate">{date}</p>
                <p className="portfolio-content-card-cardTitle"><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
            </div>
            <div className="portfolio-content-card-cardImageContainer" style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
    );
}

export default PortfolioContentCard;