const WritingLinkCard = ({date, link, title, image}) => {
    return (
        <div className="card">
            <div className="card-title-container">
                <p className="card-date">{date}</p>
                <p className="card-title"><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
            </div>
            <div className="card-image-container" style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
    );
}

const WritingLinkSection = ({color, cardData}) => {
    return (
        <div className="writing-link-section">
            <div className="writing-link-container" style={{backgroundColor: color}}>
                <div className="writing-link-card-container">
                    {cardData.map((data) => {
                        return (
                            <WritingLinkCard
                                key={data.link.substr(-20)}
                                date={data.date}
                                link={data.link}
                                title={data.title}
                                image={data.image}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default WritingLinkSection;