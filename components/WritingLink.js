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

const WritingLinkSection = ({color, cards}) => {
    return (
        <div className={styles.writingLinkSection}>
            <div className={styles.writingLinkContainer} style={{backgroundColor: color}}>
                <div className={styles.writingLinkCardContainer}>
                    {cards.map((card) => {
                        return (
                            <WritingLinkCard
                                key={card.sys.id}
                                date={card.fields.date}
                                link={card.fields.link}
                                title={card.fields.title}
                                image={card.fields.image.fields.file.url}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default WritingLinkSection;