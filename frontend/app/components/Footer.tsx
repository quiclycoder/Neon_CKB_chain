import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div>
                        <h3 className={styles.logo}>Digital Credentials</h3>
                        <p className={styles.description}>
                            Secure, verifiable digital credentials on the CKB blockchain.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Platform</h4>
                            <a href="#">Use Cases</a>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                            <a href="#">Security</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Digital Credentials Portal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
