import styles from './UseCases.module.css';

const useCases = [
    {
        icon: '🎓',
        title: 'Academic Diplomas',
        description: 'Issue verifiable university degrees and certificates that can be instantly validated by employers worldwide.',
    },
    {
        icon: '💼',
        title: 'Employment Verification',
        description: 'Provide tamper-proof employment records and experience verification for background checks.',
    },
    {
        icon: '🏢',
        title: 'Membership Verification',
        description: 'Organizations can issue membership credentials that prove affiliation and access rights.',
    },
    {
        icon: '🏅',
        title: 'Product Certifications',
        description: 'Certify product authenticity and quality standards with blockchain-backed proof.',
    },
    {
        icon: '📜',
        title: 'Professional Certifications',
        description: 'Issue industry-recognized professional credentials that never expire and are always verifiable.',
    },
    {
        icon: '🔐',
        title: 'Identity Documents',
        description: 'Create secure digital identity credentials for KYC and regulatory compliance.',
    },
];

const UseCases = () => {
    return (
        <section id="use-cases" className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Use Cases</span>
                    <h2>
                        Built for <span className="text-gradient-primary">Every Industry</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From education to enterprise, our platform supports a wide range of credential types.
                    </p>
                </div>

                <div className={styles.grid}>
                    {useCases.map((item, index) => (
                        <div key={index} className={`glass-card ${styles.card}`}>
                            <span className={styles.icon}>{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
