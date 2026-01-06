"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight } from 'lucide-react';
import { ccc } from "@ckb-ccc/connector-react";
import styles from './Register.module.css';

export default function RegisterPage() {
    const { wallet, open, disconnect } = ccc.useCcc();
    const router = useRouter();

    useEffect(() => {
        if (wallet) {
            // If wallet is connected, redirect to dashboard
            router.push('/dashboard');
        }
    }, [wallet, router]);

    const handleConnect = () => {
        open();
    };

    return (
        <div className={styles.container}>
            <div className={styles.bgGlow} />

            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.card}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Connect Wallet</h1>
                        <p className={styles.subtitle}>Connect your CKB wallet to start issuing credentials</p>
                    </div>

                    <div className={styles.actionContainer}>
                        <button
                            onClick={handleConnect}
                            className={styles.connectButton}
                        >
                            <Wallet size={20} />
                            Connect Wallet
                            <ArrowRight size={18} />
                        </button>

                        <p className={styles.helperText}>
                            Supported wallets: JoyID, MetaMask, UniPass, and more.
                        </p>
                    </div>

                    <div className={styles.footer}>
                        <p>By connecting, you agree to our Terms of Service</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
