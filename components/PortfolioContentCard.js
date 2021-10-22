import styles from "../styles/PortfolioContentCard.module.css"

const PortfolioContentCard = ({date, title, image, link}) => {
    return(
        <div className={styles.card}>
            <div className={styles.cardTitleContainer}>
                <p className={styles.cardDate}>{date}</p>
                <p className={styles.cardTitle}><a href={link} target="_blank" rel="noreferrer">{title}</a></p>
            </div>
            <div className={styles.cardImageContainer} style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
    );
}

export default PortfolioContentCard;