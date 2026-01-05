import { Controller, Post, Body } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { InitiateVerificationDto } from './dto/initiate-verification.dto';
import { VerifyWebsiteDto } from './dto/verify-website.dto';
import { VerifyTwitterDto } from './dto/verify-twitter.dto';

@Controller('verification')
export class VerificationController {
    constructor(private readonly verificationService: VerificationService) { }

    @Post('initiate')
    initiate(@Body() dto: InitiateVerificationDto) {
        return this.verificationService.initiate(dto);
    }

    @Post('verify-website')
    verifyWebsite(@Body() dto: VerifyWebsiteDto) {
        return this.verificationService.verifyWebsite(dto);
    }

    @Post('verify-twitter')
    verifyTwitter(@Body() dto: VerifyTwitterDto) {
        return this.verificationService.verifyTwitter(dto);
    }
}
