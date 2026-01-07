import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
