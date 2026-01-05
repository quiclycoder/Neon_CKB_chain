import styles from './HowItWorks.module.css';

const steps = [
    {
        number: '01',
        title: 'Register',
        description: 'Create an account using your preferred wallet (JoyID, MetaMask, or UTXO-Global). Complete your organization profile with relevant details.',
        icon: '📝',
    },
    {
        number: '02',
        title: 'Verify',
        description: 'Establish trust through Twitter verification, website verification, or KYC. Multiple levels of verification are supported.',
        icon: '✓',
    },
    {
        number: '03',
        title: 'Issue',
        description: 'Start issuing credentials as CoTA NFTs. Supporting data is stored on CKBFS with minimal fees and maximum verifiability.',
        icon: '🎫',
    },
];

const verificationMethods = [
    {
        title: 'Twitter Verification',
        description: 'Suitable for individuals and organizations with well-known public accounts. Automatic verification via posted message.',
        level: 'Basic',
    },
    {
        title: 'Website Verification',
        description: 'For those who control a recognized website. Verification via designated URL or DNS record.',
        level: 'Standard',
    },
    {
        title: 'KYC Verification',
        description: 'The highest level of verification. Manual review for individuals or organizations. Requires senior staff identification for organizations.',
        level: 'Premium',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>How It Works</span>
                    <h2>
                        Simple <span className="text-gradient-primary">Three-Step</span> Process
                    </h2>
                    <p className={styles.subtitle}>
                        Get started in minutes with our streamlined onboarding flow.
                    </p>
                </div>

                <div className={styles.stepsContainer}>
                    <div className={styles.timeline}></div>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.verificationSection}>
                    <h3 className={styles.verificationTitle}>Verification Methods</h3>
                    <div className={styles.verificationGrid}>
                        {verificationMethods.map((method, index) => (
                            <div key={index} className={`glass-card ${styles.verificationCard}`}>
                                <span className={styles.level}>{method.level}</span>
                                <h4>{method.title}</h4>
                                <p>{method.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
