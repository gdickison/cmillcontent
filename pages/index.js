import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className={styles.container}>
	  <Head>
		<title>C.M. Miller - Content Writer</title>
		<meta name="description" content="Generated by create next app" />
		<link rel="icon" href="/images/curtis_miller_logo.png" />
	  </Head>

	  <div className={styles.headerWrapper}>
		<div className={styles.headerTextContainer}>
			<h1 className={styles.title}>
				C.M. Miller
			</h1>

			<p className={styles.description}>
				Content Writer
			</p>
		</div>
	  </div>

	  <div className={styles.subHeaderTextSection}>
		<div className={styles.subHeaderTextContainer}>
			<p className={styles.subHeaderTextWithDropCap}>
				With plenty of elbow grease and a sharp eye on story, audience, style and substance, I write killer content for a range of mediums.
			</p>
			<p className={styles.subHeaderText}>
				I’m delighted to roll up my sleeves and help you out with:
			</p>
		</div>
	  </div>

	  <div className={styles.midPageNavSection}>
		<div className={styles.midPageNavContainer}>
			<div className={styles.midPageNavBox}>
				<div className={styles.navBoxIcon}>
					<Image src="/images/icon_megaphone.png" alt="megaphone" width={70} height={70} />
				</div>
			</div>
			<div className={styles.midPageNavBox}>
				<div className={styles.navBoxIcon}>
					<Image src="/images/icon_monitor.png" alt="megaphone" width={70} height={70} />
				</div>
			</div>
			<div className={styles.midPageNavBox}>
				<div className={styles.navBoxIcon}>
					<Image src="/images/icon_book.png" alt="megaphone" width={70} height={70} />
				</div>
			</div>
		</div>
	  </div>


	  <footer className={styles.footer}>
		<div>
			<Image src="/images/logo_light.png" alt="Curtis Miller Logo" width={50} height={50} />
		</div>
		<div>C.M. Miller</div>
		<div className={styles.footerText}>
			<p>Content writing and editing for marketing and advertising, entertainment, and publishing.</p>
		</div>
	  </footer>
	</div>
  )
}
