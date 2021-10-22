import styles from '../styles/Creative.module.css'

const StagePlaysContentCard = ({title, genre, description, performance, link}) => {
    return (
        <div className={styles.stagePlaysContentCard}>
            <div className={styles.stagePlaysContentGrid}>
                <div className={styles.stagePlaysContentCardContents}>
                    <p className={styles.stagePlaysTitle}>{title}</p>
                    <p className={styles.stagePlaysGenre}>{genre}</p>
                </div>
                <div className={styles.stagePlaysContentCardContents}>
                    <p className={styles.stagePlaysDescription}>{description}</p>
                </div>
                <div className={styles.stagePlaysContentCardContents}>
                    <p className={styles.stagePlaysPerformance}>{performance}</p>
                </div>
                {link &&
                    <div className={styles.stagePlaysContentCardContents}>
                        <div className={styles.cardLinkContainer}>
                            <a className={styles.externalLink} href={link} target="_blank" rel="noreferrer">
                                <span className={styles.cardLink}>Read Sample</span>
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default StagePlaysContentCard;
