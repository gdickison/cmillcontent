import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link href="/portfolio" passHref>
                    <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="creative" passHref>
                    <a className="nav-link" href="#">Creative</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/" passHref>
                <a className="nav-link" href="#">
                    <Image src="/images/logo_red.png" alt="home" width={50} height={50} />
                </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="crocodiles" passHref>
                    <a className="nav-link" href="#">Crocodiles</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="bio" passHref>
                    <a className="nav-link" href="#">Bio</a>
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;