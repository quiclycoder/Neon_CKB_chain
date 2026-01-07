import { CredentialsService, CreateCredentialDto } from './credentials.service';
export declare class CredentialsController {
    private readonly credentialsService;
    constructor(credentialsService: CredentialsService);
    issue(dto: CreateCredentialDto): Promise<{
        success: boolean;
        message: string;
        credential: import("./credentials.service").Credential;
    }>;
    findAll(): Promise<import("./credentials.service").Credential[]>;
    findOne(id: string): Promise<import("./credentials.service").Credential | undefined>;
}
