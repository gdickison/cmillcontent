import styles from '../styles/Creative.module.css'

const FictionContentCard = ({title, genre, description}) => {
    return (
        <div className={styles.fictionContentCard}>
            <div className={styles.fictionContentCardGrid}>
                <div className={styles.fictionContentCardContents}>
                    <p className={styles.fictionTitle}><a href="#">{title}</a></p>
                    <p className={styles.fictionGenre}>{genre}</p>
                </div>
                <div className={styles.fictionContentCardContents}>
                    <p className={styles.fictionDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FictionContentCard;