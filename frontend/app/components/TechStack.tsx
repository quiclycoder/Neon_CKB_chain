import styles from './TechStack.module.css';

const technologies = [
    {
        name: 'OffCKB',
        description: 'Local development framework for building, testing, and deploying dApps and smart contracts on CKB devnet.',
        category: 'Development',
    },
    {
        name: 'CKB Script Templates',
        description: 'Predefined smart contract templates for building CKB-compatible scripts, typically written in Rust.',
        category: 'Smart Contracts',
    },
    {
        name: 'CoTA NFTs',
        description: 'Provides concise on-chain proofs while storing credential data off-chain with cryptographic verification.',
        category: 'Credentials',
    },
    {
        name: 'CKBFS',
        description: 'Content storage for images and documents with embedded pointers in credentials for verifiability.',
        category: 'Storage',
    },
    {
        name: 'CCC Wallet Integration',
        description: 'Multi-wallet support via CCC SDK including JoyID, MetaMask, and UTXO-Global for transaction signing.',
        category: 'Integration',
    },
    {
        name: 'CKB Blockchain',
        description: 'The underlying blockchain providing security, immutability, and decentralization for all credentials.',
        category: 'Infrastructure',
    },
];

const considerations = [
    {
        icon: '💾',
        title: 'Storage Costs',
        description: 'For large files, CKBFS may be expensive. Web2 storage with on-chain hashes offers a cost-effective alternative.',
    },
    {
        icon: '🚀',
        title: 'Onboarding',
        description: 'Non-technical users may struggle with wallet management. Optional platform-paid fees can ease adoption.',
    },
    {
        icon: '📦',
        title: 'Data Persistence',
        description: 'Various storage tiers available: Web2 (low cost), CKBFS (higher guarantees), IPFS (community-dependent).',
    },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Technology Stack</span>
                    <h2>
                        Powered by <span className="text-gradient-primary">CKB Ecosystem</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Built on battle-tested, open-source blockchain technology designed for scalability and security.
                    </p>
                </div>

                <div className={styles.techGrid}>
                    {technologies.map((tech, index) => (
                        <div key={index} className={`glass-card ${styles.techCard}`}>
                            <span className={styles.category}>{tech.category}</span>
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.considerationsSection}>
                    <h3 className={styles.considerationsTitle}>Considerations</h3>
                    <div className={styles.considerationsGrid}>
                        {considerations.map((item, index) => (
                            <div key={index} className={styles.considerationCard}>
                                <span className={styles.considerationIcon}>{item.icon}</span>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
