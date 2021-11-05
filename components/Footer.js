import Image from "next/image";

const Footer = () => {
	return (
		<footer className="footer-footer">
			<div>
				<Image src="/images/logo_light.png" alt="Curtis Miller Logo" width={50} height={50} />
			</div>
			<div className="footer-footerName">C.M. Miller</div>
			<div className="footer-footerText">
				<p>Content writing for advertising, entertainment, and publishing.</p>
			</div>
	  </footer>
	);
}

export default Footer;