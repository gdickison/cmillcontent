import styles from '../styles/Testimonial.module.css'

const Testimonial = ({testimonial, source}) => {
    return (
        <div className={styles.testimonialSection}>
            <div className={styles.testimonialBorder}>
                <hr/>
            </div>
            <div className={styles.testimonialContainer}>
                <p className={styles.testimonialText}>{testimonial}</p>
                <p className={styles.testimonialSource}>- {source}</p>
            </div>
            <div className={styles.testimonialBorder}>
                <hr/>
            </div>
        </div>
    );
}

export default Testimonial;