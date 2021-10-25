import styles from '../styles/HomeSubheader.module.css'

const HomeSubheader = ({subheaderText}) => {
    return (
        <div className={styles.subheaderSection}>
            <div className={styles.subheaderBorder}>
                <hr/>
            </div>
            <div className={styles.subheaderContainer}>
                <p className={styles.subheaderText}>{subheaderText}</p>
            </div>
            <div className={styles.subheaderBorder}>
                <hr/>
            </div>
        </div>
    );
}

export default HomeSubheader;