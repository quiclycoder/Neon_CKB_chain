import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    getStats() {
        return {
            activeCredentials: 3,
            verifications: 12,
            recentActivity: [
                { id: 1, title: 'Credential Verified', time: '2 minutes ago' },
                { id: 2, title: 'New Credential Issued', time: '1 hour ago' },
                { id: 3, title: 'Profile Updated', time: '1 day ago' },
            ],
        };
    }
}
