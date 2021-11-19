const PortfolioSectionTitle = ({title, subtitle}) => {
    return (
        <div className="portfolio-section-contentTitleContainer">
            <p className="portfolio-section-contentTitle">{title}</p>
            <p className="portfolio-section-contentSubtitle">{subtitle}</p>
        </div>
    );
}

export default PortfolioSectionTitle;