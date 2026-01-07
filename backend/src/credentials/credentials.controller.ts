import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CredentialsService, CreateCredentialDto } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
    constructor(private readonly credentialsService: CredentialsService) { }

    @Post('issue')
    async issue(@Body() dto: CreateCredentialDto) {
        const credential = await this.credentialsService.issue(dto);
        return {
            success: true,
            message: 'Credential issued successfully',
            credential,
        };
    }

    @Get()
    async findAll() {
        return this.credentialsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.credentialsService.findOne(id);
    }
}
