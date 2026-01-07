"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Clock, CheckCircle2, XCircle, ExternalLink, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./Credentials.module.css";

interface Credential {
    id: string;
    title: string;
    description: string;
    recipientName: string;
    recipientEmail: string;
    credentialType: string;
    issuedAt: string;
    status: 'pending' | 'minted' | 'revoked';
    txHash?: string;
}

const credentialTypeLabels: Record<string, string> = {
    certificate: 'Academic Certificate',
    diploma: 'Diploma',
    employment: 'Employment Verification',
    membership: 'Membership Card',
    professional: 'Professional Certification',
};

export default function CredentialsPage() {
    const router = useRouter();
    const [credentials, setCredentials] = React.useState<Credential[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [searchQuery, setSearchQuery] = React.useState('');

    React.useEffect(() => {
        const fetchCredentials = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/credentials`);
                if (response.ok) {
                    const data = await response.json();
                    setCredentials(data);
                }
            } catch (error) {
                console.error('Failed to fetch credentials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCredentials();
    }, []);

    const filteredCredentials = credentials.filter(cred =>
        cred.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cred.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cred.recipientEmail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'minted':
                return <CheckCircle2 size={16} className={styles.statusMinted} />;
            case 'pending':
                return <Clock size={16} className={styles.statusPending} />;
            case 'revoked':
                return <XCircle size={16} className={styles.statusRevoked} />;
            default:
                return null;
        }
    };

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'minted':
                return styles.badgeMinted;
            case 'pending':
                return styles.badgePending;
            case 'revoked':
                return styles.badgeRevoked;
            default:
                return '';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundGradients}>
                <div className={`${styles.gradientBlob} ${styles.blob1}`} />
                <div className={`${styles.gradientBlob} ${styles.blob2}`} />
            </div>

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    className={styles.backButton}
                    onClick={() => router.push('/dashboard')}
                >
                    <ArrowLeft size={20} />
                    Back to Dashboard
                </button>

                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h1 className={styles.title}>
                            <ShieldCheck size={32} className={styles.titleIcon} />
                            Your Credentials
                        </h1>
                        <p className={styles.subtitle}>
                            View and manage all issued digital credentials
                        </p>
                    </div>
                    <button
                        className={styles.issueButton}
                        onClick={() => router.push('/issue')}
                    >
                        + Issue New
                    </button>
                </div>

                <div className={styles.searchBar}>
                    <Search size={20} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search by title, recipient name, or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                {loading ? (
                    <div className={styles.loadingState}>
                        <div className={styles.spinner} />
                        <p>Loading credentials...</p>
                    </div>
                ) : filteredCredentials.length === 0 ? (
                    <div className={styles.emptyState}>
                        <ShieldCheck size={64} className={styles.emptyIcon} />
                        <h2>No Credentials Found</h2>
                        <p>
                            {searchQuery
                                ? "No credentials match your search criteria."
                                : "You haven't issued any credentials yet."}
                        </p>
                        {!searchQuery && (
                            <button
                                className={styles.emptyButton}
                                onClick={() => router.push('/issue')}
                            >
                                Issue Your First Credential
                            </button>
                        )}
                    </div>
                ) : (
                    <div className={styles.credentialsList}>
                        {filteredCredentials.map((credential, index) => (
                            <motion.div
                                key={credential.id}
                                className={styles.credentialCard}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.credentialType}>
                                        {credentialTypeLabels[credential.credentialType] || credential.credentialType}
                                    </span>
                                    <span className={`${styles.statusBadge} ${getStatusClass(credential.status)}`}>
                                        {getStatusIcon(credential.status)}
                                        {credential.status.charAt(0).toUpperCase() + credential.status.slice(1)}
                                    </span>
                                </div>

                                <h3 className={styles.credentialTitle}>{credential.title}</h3>
                                <p className={styles.credentialDesc}>{credential.description}</p>

                                <div className={styles.recipientInfo}>
                                    <div className={styles.recipientDetail}>
                                        <span className={styles.detailLabel}>Recipient</span>
                                        <span className={styles.detailValue}>{credential.recipientName}</span>
                                    </div>
                                    <div className={styles.recipientDetail}>
                                        <span className={styles.detailLabel}>Email</span>
                                        <span className={styles.detailValue}>{credential.recipientEmail}</span>
                                    </div>
                                </div>

                                <div className={styles.cardFooter}>
                                    <span className={styles.issuedDate}>
                                        Issued: {formatDate(credential.issuedAt)}
                                    </span>
                                    {credential.txHash && (
                                        <a
                                            href={`https://explorer.nervos.org/transaction/${credential.txHash}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.txLink}
                                        >
                                            View on Explorer
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
