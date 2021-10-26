import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/HomeCards.module.css'

const HomeCards = () => {
    return (
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
    )
}

export default HomeCards;