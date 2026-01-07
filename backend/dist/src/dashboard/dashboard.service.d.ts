export declare class DashboardService {
    getStats(): {
        activeCredentials: number;
        verifications: number;
        recentActivity: {
            id: number;
            title: string;
            time: string;
        }[];
    };
}
