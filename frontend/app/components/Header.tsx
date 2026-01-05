"use client";

import Link from 'next/link';
import styles from './Header.module.css';
import ConnectWallet from './ConnectWallet';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Digital <span className="text-gradient-primary">Credentials</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#use-cases" className={styles.link}>Use Cases</Link>
                    <Link href="#features" className={styles.link}>Features</Link>
                    <Link href="#how-it-works" className={styles.link}>How It Works</Link>
                    <Link href="#tech-stack" className={styles.link}>Tech Stack</Link>
                </nav>

                <div className={styles.actions}>
                    <ConnectWallet />
                </div>
            </div>
        </header>
    );
};

export default Header;

