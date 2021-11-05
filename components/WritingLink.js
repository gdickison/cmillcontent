const WritingLinkCard = ({date, link, title, image}) => {
    return (
        <div className="writingLinkCard-card">
            <div className="writingLinkCard-cardTitleContainer">
                <p className="writingLinkCard-cardDate">{date}</p>
                <p className="writingLinkCard-cardTitle"><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
            </div>
            <div className="writingLinkCard-cardTitleContainer" style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
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