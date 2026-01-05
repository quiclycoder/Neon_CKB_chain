import { VerificationType } from '@prisma/client';
export declare class InitiateVerificationDto {
    organizationId: string;
    type: VerificationType;
}
