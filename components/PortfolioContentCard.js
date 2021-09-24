import Image from "next/dist/client/image"
import styles from "../styles/Portfolio.module.css"

const PortfolioContentCard = ({date, title, image}) => {
    return(
        <div className={styles.card}>
            <div className={styles.cardTitleContainer}>
                <p className={styles.cardDate}>{date}</p>
                <p className={styles.cardTitle}>{title}</p>
            </div>
            <div className={styles.cardImageContainer} style={{backgroundImage: "url(" + image + ")"}}></div>
        </div>
    );
}

export default PortfolioContentCard;