import styles from './Security.module.css';

const Security = () => {
    return (
        <section id="security" className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Security & Integrity</span>
                    <h2>
                        Cryptographically <span className="text-gradient-primary">Guaranteed</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Our credentials are secured by advanced blockchain technology, ensuring they remain verifiable forever.
                    </p>
                </div>

                <div className={styles.content}>
                    <div className={styles.mainCard}>
                        <div className={`glass-card ${styles.cotaCard}`}>
                            <h3>CoTA NFTs</h3>
                            <p>
                                CoTA NFTs utilize <strong>sparse Merkle trees</strong> to record verification data directly on-chain,
                                while associated content stays off-chain. This innovative approach provides:
                            </p>
                            <ul className={styles.benefits}>
                                <li>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Concise on-chain proofs with minimal storage costs</span>
                                </li>
                                <li>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Cryptographic proofs ensure off-chain content is verifiable</span>
                                </li>
                                <li>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Tamper-resistant by design</span>
                                </li>
                                <li>
                                    <span className={styles.checkmark}>✓</span>
                                    <span>Extremely low-cost without compromising integrity</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.sideCards}>
                        <div className={`glass-card ${styles.featureCard}`}>
                            <div className={styles.featureIcon}>🔐</div>
                            <h4>Chain of Trust</h4>
                            <p>
                                By linking credentials to verified accounts—established through websites, social media,
                                or KYC—we create a cryptographically provable chain connecting issuers to credentials via the CKB blockchain.
                            </p>
                        </div>

                        <div className={`glass-card ${styles.featureCard}`}>
                            <div className={styles.featureIcon}>🌍</div>
                            <h4>Global Verification</h4>
                            <p>
                                Credentials are globally verifiable, do not rely on central third parties, and persist
                                even if the original platform or issuer becomes unavailable.
                            </p>
                        </div>

                        <div className={`glass-card ${styles.featureCard}`}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h4>Instant Revocation</h4>
                            <p>
                                The system supports immediate and provable revocation, ensuring clarity and trust at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;
