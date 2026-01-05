"use client";

import { ccc } from "@ckb-ccc/connector-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./ConnectWallet.module.css";

export function ConnectWallet() {
    const { open } = ccc.useCcc();
    const signer = ccc.useSigner();
    const [address, setAddress] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!signer) {
            setAddress(null);
            return;
        }

        (async () => {
            const addr = await signer.getRecommendedAddress();
            setAddress(addr);

            // Redirect to dashboard if connected and not already there
            if (pathname !== "/dashboard") {
                router.push("/dashboard");
            }
        })();
    }, [signer, router, pathname]);

    const displayAddress = address
        ? `${address.slice(0, 8)}...${address.slice(-6)}`
        : null;

    return (
        <button
            className={styles.connectButton}
            onClick={open}
        >
            {signer && displayAddress ? (
                <>
                    <span className={styles.connectedDot}></span>
                    <span>{displayAddress}</span>
                </>
            ) : (
                <>
                    <svg
                        className={styles.walletIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                    <span>Connect Wallet</span>
                </>
            )}
        </button>
    );
}

export default ConnectWallet;
