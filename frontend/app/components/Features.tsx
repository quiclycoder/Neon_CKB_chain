import styles from './Features.module.css';

const features = [
    {
        icon: '💰',
        title: 'Extremely Low Cost',
        description: 'Issue credentials for fractions of a cent. Our blockchain-optimized approach minimizes storage and transaction fees.',
        highlight: '<$0.01 per credential',
    },
    {
        icon: '🔗',
        title: 'Easily Shareable',
        description: 'Credentials are shareable via simple web links. Recipients can verify authenticity without any technical knowledge.',
        highlight: 'One-click sharing',
    },
    {
        icon: '🌐',
        title: 'Open Source',
        description: 'Our architecture is fully open-source. Anyone can build independent verification tools with no central authority.',
        highlight: 'Fully transparent',
    },
    {
        icon: '🛡️',
        title: 'Tamper-Proof',
        description: 'Cryptographic proofs ensure that credentials cannot be altered. Any tampering is immediately detectable.',
        highlight: 'Blockchain-secured',
    },
    {
        icon: '🌍',
        title: 'Globally Verifiable',
        description: 'Credentials can be verified from anywhere in the world, 24/7, without relying on the original issuer.',
        highlight: 'No dependencies',
    },
    {
        icon: '⚡',
        title: 'Instant Revocation',
        description: 'Revoke credentials immediately with on-chain proof. Revocations are as verifiable as issuances.',
        highlight: 'Real-time updates',
    },
];

const Features = () => {
    return (
        <section id="features" className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Key Features</span>
                    <h2>
                        Why Choose <span className="text-gradient-primary">Digital Credentials</span>
                    </h2>
                    <p className={styles.subtitle}>
                        A modern approach to credential issuance that prioritizes cost, accessibility, and trust.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardInner}>
                                <span className={styles.icon}>{feature.icon}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <span className={styles.highlight}>{feature.highlight}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
