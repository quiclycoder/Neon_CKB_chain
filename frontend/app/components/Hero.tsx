import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgGlow}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span>New</span>
                        <p>Digital Credentials on CKB</p>
                    </div>
                    <h1 className={styles.title}>
                        The Future of <br />
                        <span className="text-gradient-primary">Digital Verification</span>
                    </h1>
                    <p className={styles.description}>
                        Issue secure, verifiable, and low-cost digital credentials on the CKB blockchain.
                        Empower your organization with a decentralized, open-source solution.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/register" className="btn btn-primary">Start Issuing</Link>
                        <Link href="#how-it-works" className="btn btn-outline">How It Works</Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3>100%</h3>
                            <p>Verifiable</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>&lt;$0.01</h3>
                            <p>Cost per Issue</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>Zero</h3>
                            <p>Central Authority</p>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={`${styles.card} glass-card`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.avatar}></div>
                            <div>
                                <h4>University Diploma</h4>
                                <p>Issued by CKB University</p>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.line}></div>
                            <div className={styles.line} style={{ width: '80%' }}></div>
                            <div className={styles.line} style={{ width: '60%' }}></div>
                        </div>
                        <div className={styles.verifiedBadge}>
                            ✓ Verified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
