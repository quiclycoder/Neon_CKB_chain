"use client";

import React, { CSSProperties, useMemo } from "react";
import { ccc } from "@ckb-ccc/connector-react";

export function CCCProvider({ children }: { children: React.ReactNode }) {
    const defaultClient = useMemo(() => {
        return process.env.NEXT_PUBLIC_IS_MAINNET === "true"
            ? new ccc.ClientPublicMainnet()
            : new ccc.ClientPublicTestnet();
    }, []);

    return (
        <ccc.Provider
            connectorProps={{
                style: {
                    "--background": "#0a0a14",
                    "--divider": "rgba(255, 255, 255, 0.1)",
                    "--btn-primary": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    "--btn-primary-hover": "linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)",
                    "--btn-secondary": "rgba(255, 255, 255, 0.05)",
                    "--btn-secondary-hover": "rgba(255, 255, 255, 0.1)",
                    "--icon-primary": "#FFFFFF",
                    "--icon-secondary": "rgba(255, 255, 255, 0.6)",
                    color: "#ffffff",
                    "--tip-color": "#888",
                } as CSSProperties,
            }}
            defaultClient={defaultClient}
            clientOptions={[
                {
                    name: "CKB Testnet",
                    client: new ccc.ClientPublicTestnet(),
                },
                {
                    name: "CKB Mainnet",
                    client: new ccc.ClientPublicMainnet(),
                },
            ]}
        >
            {children}
        </ccc.Provider>
    );
}

export default CCCProvider;
