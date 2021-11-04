import styles from '../styles/WritingLink.module.css'

const WritingLinkCard = ({date, link, title, image}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitleContainer}>
                <p className={styles.cardDate}>{date}</p>
                <p className={styles.cardTitle}><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
            </div>
            <div className={styles.cardTitleContainer} style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
    );
}

const WritingLinkSection = ({color, cardData}) => {
    return (
        <div className={styles.writingLinkSection}>
            <div className={styles.writingLinkContainer} style={{backgroundColor: color}}>
                <div className={styles.writingLinkCardContainer}>
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