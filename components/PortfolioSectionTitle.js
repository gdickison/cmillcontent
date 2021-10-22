import styles from '../styles/PortfolioSectionTitle.module.css'

const PortfolioSectionTitle = ({title, subtitle}) => {
    return (
        <div className={styles.contentTitleContainer}>
            <p className={styles.contentTitle}>{title}</p>
            <p className={styles.contentSubtitle}>{subtitle}</p>
        </div>
    );
}

export default PortfolioSectionTitle;