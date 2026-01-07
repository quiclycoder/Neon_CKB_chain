"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ArrowLeft, Upload, FileText, User, Mail, Building, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./IssueCredential.module.css";

interface CredentialFormData {
    title: string;
    description: string;
    recipientName: string;
    recipientEmail: string;
    credentialType: string;
}

export default function IssueCredentialPage() {
    const router = useRouter();
    const [formData, setFormData] = React.useState<CredentialFormData>({
        title: '',
        description: '',
        recipientName: '',
        recipientEmail: '',
        credentialType: 'certificate',
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:3000/credentials/issue', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);
            }
        } catch (error) {
            console.error('Failed to issue credential:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const credentialTypes = [
        { value: 'certificate', label: 'Academic Certificate' },
        { value: 'diploma', label: 'Diploma' },
        { value: 'employment', label: 'Employment Verification' },
        { value: 'membership', label: 'Membership Card' },
        { value: 'professional', label: 'Professional Certification' },
    ];

    if (isSuccess) {
        return (
            <div className={styles.container}>
                <div className={styles.backgroundGradients}>
                    <div className={`${styles.gradientBlob} ${styles.blob1}`} />
                    <div className={`${styles.gradientBlob} ${styles.blob2}`} />
                </div>
                <motion.div
                    className={styles.successCard}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className={styles.successIcon}>
                        <CheckCircle size={64} />
                    </div>
                    <h2 className={styles.successTitle}>Credential Issued!</h2>
                    <p className={styles.successText}>
                        Your credential has been successfully created and will be minted on the CKB blockchain.
                    </p>
                    <p className={styles.redirectText}>Redirecting to dashboard...</p>
                </motion.div>
            </div>
        );
    }

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
                    <h1 className={styles.title}>Issue New Credential</h1>
                    <p className={styles.subtitle}>
                        Create a verifiable digital credential on the CKB blockchain
                    </p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formCard}>
                        <h2 className={styles.sectionTitle}>
                            <FileText size={20} />
                            Credential Details
                        </h2>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Credential Type</label>
                            <select
                                name="credentialType"
                                value={formData.credentialType}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                {credentialTypes.map(type => (
                                    <option key={type.value} value={type.value}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g., Bachelor of Computer Science"
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe the credential..."
                                className={styles.textarea}
                                rows={4}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formCard}>
                        <h2 className={styles.sectionTitle}>
                            <User size={20} />
                            Recipient Information
                        </h2>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Recipient Name</label>
                                <input
                                    type="text"
                                    name="recipientName"
                                    value={formData.recipientName}
                                    onChange={handleChange}
                                    placeholder="Full name"
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Recipient Email</label>
                                <input
                                    type="email"
                                    name="recipientEmail"
                                    value={formData.recipientEmail}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className={styles.input}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner} />
                                Issuing Credential...
                            </>
                        ) : (
                            <>
                                <Upload size={20} />
                                Issue Credential
                            </>
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
