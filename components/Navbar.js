import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

const NavBar = () => {
    const router = useRouter();

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link href="/portfolio" passHref>
                        <a className={router.pathname == "/portfolio" ? "navbar-brand active" : "navbar-brand"} href="#">Portfolio</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/creative" passHref>
                        <a className={router.pathname == "/creative" ? "navbar-brand active" : "navbar-brand"} href="#">Creative</a>
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
                    <Link href="/crocodiles" passHref>
                        <a className={router.pathname == "/crocodiles" ? "navbar-brand active" : "navbar-brand"} href="#">Crocodiles</a>
                    </Link>
                </div>
                <div className="container-fluid">
                    <Link href="/bio" passHref>
                        <a className={router.pathname == "/bio" ? "navbar-brand active" : "navbar-brand"} href="#">Bio</a>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;