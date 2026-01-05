import { IsString, IsNotEmpty } from 'class-validator';

export class VerifyWebsiteDto {
    @IsString()
    @IsNotEmpty()
    verificationRequestId: string;
}
