"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { ccc } from "@ckb-ccc/connector-react";
import { motion, Variants } from "framer-motion";
import {
    Wallet,
    ShieldCheck,
    PlusCircle,
    Settings,
    HelpCircle,
    Activity,
    ChevronRight,
    Copy,
    ExternalLink
} from "lucide-react";
import styles from "./Dashboard.module.css";

interface ActivityItem {
    id: number;
    title: string;
    time: string;
}

interface DashboardStats {
    activeCredentials: number;
    verifications: number;
    recentActivity: ActivityItem[];
}

export default function DashboardPage() {
    const router = useRouter();
    const { wallet } = ccc.useCcc();
    const signer = ccc.useSigner();
    const [address, setAddress] = React.useState<string | null>(null);
    const [copied, setCopied] = React.useState(false);
    const [stats, setStats] = React.useState<DashboardStats | null>(null);

    React.useEffect(() => {
        if (signer) {
            (async () => {
                const addr = await signer.getRecommendedAddress();
                setAddress(addr);
            })();
        }
    }, [signer]);

    React.useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/dashboard/stats`);
                if (response.ok) {
                    const data = await response.json();
                    setStats(data);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            }
        };

        fetchStats();
    }, []);

    const copyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className={styles.container}>
            {/* Background Gradients */}
            <div className={styles.backgroundGradients}>
                <div className={`${styles.gradientBlob} ${styles.blob1}`} />
                <div className={`${styles.gradientBlob} ${styles.blob2}`} />
            </div>

            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className={styles.header}>
                    <h1 className={styles.title}>
                        Dashboard
                    </h1>
                    <p className={styles.subtitle}>Manage your digital identity on CKB</p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Left Column - Wallet & Stats */}
                    <motion.div variants={itemVariants} className={styles.column}>
                        {/* Wallet Card */}
                        <div className={`${styles.card} ${styles.walletCard}`}>
                            <div className={styles.walletHeader}>
                                <div className={styles.iconWrapper}>
                                    <Wallet size={24} />
                                </div>
                                <div className={styles.statusBadge}>
                                    <span className={styles.statusDot} />
                                    Connected
                                </div>
                            </div>

                            <div className="space-y-1 relative z-10">
                                <p className={styles.addressLabel}>Wallet Address</p>
                                <div className={styles.addressValue} onClick={copyAddress}>
                                    <p className="truncate">
                                        {address || "Loading..."}
                                    </p>
                                    {copied ? (
                                        <span className={`${styles.textGreen} ${styles.textXs}`}>Copied!</span>
                                    ) : (
                                        <Copy className={styles.copyIcon} />
                                    )}
                                </div>
                            </div>

                            <div className={styles.providerSection}>
                                <div className="flex justify-between items-center w-full">
                                    <span className={styles.addressLabel}>Provider</span>
                                    <span className="font-medium">{wallet?.name || "Unknown"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Widget */}
                        <div className={styles.card}>
                            <h3 className={styles.sectionTitle}>Overview</h3>
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <p className={styles.statValue}>{stats?.activeCredentials ?? "-"}</p>
                                    <p className={styles.statLabel}>Active Credentials</p>
                                </div>
                                <div className={styles.statItem}>
                                    <p className={styles.statValue}>{stats?.verifications ?? "-"}</p>
                                    <p className={styles.statLabel}>Verifications</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Actions & Activity */}
                    <motion.div variants={itemVariants} className={styles.column}>
                        {/* Quick Actions */}
                        <div>
                            <h2 className={styles.sectionTitle}>
                                <span className={styles.titleBar} />
                                Quick Actions
                            </h2>
                            <div className={styles.actionsGrid}>
                                {[
                                    { icon: ShieldCheck, title: "View Credentials", desc: "Check your verified credentials", color: styles.textBlue, bg: styles.bgBlue, href: "/credentials" },
                                    { icon: PlusCircle, title: "Issue New", desc: "Create a new credential", color: styles.textPurple, bg: styles.bgPurple, href: "/issue" },
                                    { icon: Settings, title: "Settings", desc: "Manage your account", color: styles.textGray, bg: styles.bgGray, href: "/settings" },
                                    { icon: HelpCircle, title: "Support", desc: "Get assistance", color: styles.textPink, bg: styles.bgPink, href: "/support" },
                                ].map((action, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={styles.actionButton}
                                        onClick={() => router.push(action.href)}
                                    >
                                        <div className={`${styles.actionIconWrapper} ${action.bg}`}>
                                            <action.icon size={24} className={action.color} />
                                        </div>
                                        <div>
                                            <h3 className={styles.actionTitle}>
                                                {action.title}
                                            </h3>
                                            <p className={styles.actionDesc}>{action.desc}</p>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className={styles.card}>
                            <div className={styles.activityHeader}>
                                <h2 className={styles.sectionTitle}>
                                    <Activity size={20} className={styles.textIndigo} />
                                    Recent Activity
                                </h2>
                                <button className={styles.viewAll}>
                                    View All <ChevronRight size={16} />
                                </button>
                            </div>

                            <div className={styles.activityList}>
                                {stats?.recentActivity ? (
                                    stats.recentActivity.map((activity) => (
                                        <div key={activity.id} className={styles.activityItem}>
                                            <div className={styles.activityIcon}>
                                                <div className={styles.activityDot} />
                                            </div>
                                            <div className={styles.activityContent}>
                                                <p className={styles.activityTitle}>{activity.title}</p>
                                                <p className={styles.activityTime}>{activity.time}</p>
                                            </div>
                                            <ExternalLink size={16} className={styles.textGray600} />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">Loading activity...</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

