import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class VerifyTwitterDto {
    @IsString()
    @IsNotEmpty()
    verificationRequestId: string;

    @IsUrl()
    @IsNotEmpty()
    tweetUrl: string;
}
