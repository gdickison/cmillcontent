import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className="page-container">
	<Head>
		<title>C.M. Miller Content Writer</title>
		<meta name="description" content="Generated by create next app" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/images/curtis_miller_logo.png" />
	</Head>

	<NavBar />
	<div className="content-wrapper">
		<div className={styles.headerWrapper}>
			<div className={styles.headerTextContainer}>
				<h1 className={styles.title}>
					C. M. Miller
				</h1>
				<p className={styles.subtitle}>
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

		<div className={styles.cardSection}>
			<div className={styles.cardContainer}>
				<div className={styles.card}>
					<div className={styles.cardIcon}>
						<Image src="/images/icon_megaphone.png" alt="megaphone" width={80} height={80} />
					</div>
					<h2 className={styles.cardHeader}>Marketing and Advertising</h2>
					<div className={styles.cardContentList}>
						<ul>
							<li>
								Content writing and editing, ghostwriting, blogging, script writing, ad copy, site copy, social media
							</li>
							<li>
								Revising, editing, brainstorming, outlining, proofreading
							</li>
						</ul>
					</div>
					<div className={styles.cardLinkContainer}>
						<Link href="/portfolio" passHref>
							<span className={styles.cardLink}>Visit Portfolio</span>
						</Link>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardIcon}>
						<Image src="/images/icon_monitor.png" alt="megaphone" width={80} height={80} />
					</div>
					<h2 className={styles.cardHeader}>Entertainment</h2>
					<div className={styles.cardContentList}>
						<ul>
							<li>
								Script and content writing for film, theater, television, web, and podcast
							</li>
							<li>
								Revising, polishing, editing, and proofreading
							</li>
							<li>
								Story development
							</li>
							<li>
								Submission reading and feedback
							</li>
						</ul>
					</div>
					<div className={styles.cardLinkContainer}>
						<Link href="/creative" passHref>
							<span className={styles.cardLink}>Visit Creative</span>
						</Link>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardIcon}>
						<Image src="/images/icon_book.png" alt="megaphone" width={80} height={80} />
					</div>
					<h2 className={styles.cardHeader}>Publishing and Literary</h2>
					<div className={styles.cardContentList}>
						<ul>
							<li>
								Writing and ghostwriting (fiction, memoir, creative nonfiction), story development
							</li>
							<li>
								Submission reading and proofreading
							</li>
							<li>
								Copy and line editing
							</li>
						</ul>
					</div>
					<div className={styles.cardLinkContainer}>
						<Link href="/crocodiles" passHref>
							<span className={styles.cardLink}>Visit Blog</span>
						</Link>
					</div>
				</div>
			</div>
		</div>

		<div className={styles.putMeToWorkContainer}>
			<Link href="mailto:curtis.miller@biola.edu" passHref>
				<span className={styles.putMeToWorkButton}>Put Me To Work</span>
			</Link>
		</div>

	</div>

	<Footer />
	</div>
  )
}
