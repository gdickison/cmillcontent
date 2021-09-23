import Image from "next/dist/client/image"
import styles from "../styles/Portfolio.module.css"

const PortfolioContentCard = ({date, title, image}) => {
    return(
        <div className={styles.card}>
            <div className={styles.cardTitleContainer}>
                <p className={styles.cardDate}>{date}</p>
                <p className={styles.cardTitle}>{title}</p>
            </div>
            <div className={styles.cardImageContainer}><Image src={image} alt={title} width={360} height={170} layout="intrinsic" /></div>
        </div>
    );
}

export default PortfolioContentCard;