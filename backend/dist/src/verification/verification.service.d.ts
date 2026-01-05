import { PrismaService } from '../prisma/prisma.service';
import { InitiateVerificationDto } from './dto/initiate-verification.dto';
import { VerifyWebsiteDto } from './dto/verify-website.dto';
import { VerifyTwitterDto } from './dto/verify-twitter.dto';
export declare class VerificationService {
    private prisma;
    constructor(prisma: PrismaService);
    initiate(dto: InitiateVerificationDto): Promise<{
        data: import("@prisma/client/runtime/client").JsonValue | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.VerificationType;
        status: import(".prisma/client").$Enums.RequestStatus;
        orgId: string;
    }>;
    verifyWebsite(dto: VerifyWebsiteDto): Promise<{
        success: boolean;
    }>;
    verifyTwitter(dto: VerifyTwitterDto): Promise<{
        success: boolean;
    }>;
}
