import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link href="/portfolio" passHref>
                        <a className="navbar-brand" href="#">Portfolio</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/creative" passHref>
                        <a className="navbar-brand" href="#">Creative</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/" passHref>
                        <a className="navbar-brand" href="#">
                            <Image src="/images/logo_red.png" alt="home" width={50} height={50} />
                        </a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="crocodiles" passHref>
                        <a className="navbar-brand" href="#">Crocodiles</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="bio" passHref>
                        <a className="navbar-brand" href="#">Bio</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;