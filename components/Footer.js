import Image from "next/image";
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<Image src="/images/logo_light.png" alt="Curtis Miller Logo" width={50} height={50} />
			</div>
			<div>C.M. Miller</div>
			<div className={styles.footerText}>
				<p>Content writing for advertising, entertainment, and publishing.</p>
			</div>
	  </footer>
	);
}

export default Footer;