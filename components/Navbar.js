import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

const NavBar = () => {
    const router = useRouter();

    return (
        <div id="nav-container" className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link href="/portfolio" passHref>
                        <a id={router.pathname == "/portfolio" ? "active-link" : "inactive-link"} className="navbar-brand" href="#">Portfolio</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/creative" passHref>
                        <a id={router.pathname == "/creative" ? "active-link" : "inactive-link"} className="navbar-brand" href="#">Creative</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/" passHref>
                        <a className="navbar-brand" href="#">
                            <Image id="home-link" src="/images/logo_red.png" alt="home" width={50} height={50} />
                        </a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/crocodiles" passHref>
                        <a id={router.pathname == "/crocodiles" ? "active-link" : "inactive-link"} className="navbar-brand" href="#">Crocodiles</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/bio" passHref>
                        <a id={router.pathname == "/bio" ? "active-link" : "inactive-link"} className="navbar-brand" href="#">Bio</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;