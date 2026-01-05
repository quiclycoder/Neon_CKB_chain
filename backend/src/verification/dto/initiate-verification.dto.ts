import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { VerificationType } from '@prisma/client';

export class InitiateVerificationDto {
    @IsString()
    @IsNotEmpty()
    organizationId: string;

    @IsEnum(VerificationType)
    type: VerificationType;
}
