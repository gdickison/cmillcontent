const StagePlaysContentCard = ({title, genre, description, performance, link}) => {
    return (
        <div className="creative-stagePlaysContentCard">
            <div className="creative-stagePlaysContentGrid">
                <div className="creative-stagePlaysContentCardContents">
                    <p className="creative-stagePlaysTitle">{title}</p>
                    <p className="creative-stagePlaysGenre">{genre}</p>
                </div>
                <div className="creative-stagePlaysContentCardContents">
                    <div className="creative-stagePlaysDescription">{description}</div>
                </div>
                <div className="creative-stagePlaysContentCardContents">
                    <p className="creative-stagePlaysPerformance">{performance}</p>
                </div>
                {link &&
                    <div className="creative-stagePlaysContentCardContents">
                        <div className="creative-cardLinkContainer">
                            <a className="creative-externalLink" href={link} target="_blank" rel="noreferrer">
                                <span className="creative-cardLink">Read Sample</span>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default StagePlaysContentCard;
