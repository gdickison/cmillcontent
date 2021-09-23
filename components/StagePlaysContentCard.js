import styles from '../styles/Creative.module.css'
import Link from 'next/dist/client/link';

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
                <div className={styles.stagePlaysContentCardContents}>
                    <div className={styles.cardLinkContainer}>
                        <Link href={link} passHref>
                            <span className={styles.cardLink}>Read Sample</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StagePlaysContentCard;
