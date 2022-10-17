import Image from "next/image";

const Footer = ({id}) => {
	return (
		<footer className="footer-footer" id={id}>
			<div>
				<Image src="/images/logo_light.png" alt="Curtis Miller Logo" width={50} height={50} />
			</div>
			<div className="footer-footerName">C.M. Miller</div>
      <div className="footer-socialLinks">
        <span className="footer-socialLink">
          <a href="https://www.linkedin.com/in/c-m-miller-90664914/" target="_blank" rel="noreferrer">
            <Image src="/images/icon_linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </a>
        </span>
        <span className="footer-socialLink">
          <a href="https://twitter.com/CrocodileReads" target="_blank" rel="noreferrer">
            <Image src="/images/icon_twitter.svg" alt="Twitter" width={30} height={30} />
          </a>
        </span>
        <span className="footer-socialLink">
          <a href="https://www.instagram.com/crocodilereads/" target="_blank" rel="noreferrer">
            <Image src="/images/icon_instagram.svg" alt="Instagram" width={30} height={30} />
          </a>
        </span>
        <span className="footer-socialLink">
          <a href="https://www.facebook.com/CrocodileReads" target="_blank" rel="noreferrer">
            <Image src="/images/icon_facebook.svg" alt="Facebook" width={30} height={30} />
          </a>
        </span>
      </div>
			<div className="footer-footerText">
				<p>Content writing for advertising, entertainment, and publishing.</p>
			</div>
	  </footer>
	);
}

export default Footer;