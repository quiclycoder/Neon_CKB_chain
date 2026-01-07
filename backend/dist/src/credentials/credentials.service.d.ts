export interface CreateCredentialDto {
    title: string;
    description: string;
    recipientName: string;
    recipientEmail: string;
    credentialType: string;
}
export interface Credential {
    id: string;
    title: string;
    description: string;
    recipientName: string;
    recipientEmail: string;
    credentialType: string;
    issuedAt: Date;
    status: 'pending' | 'minted' | 'revoked';
    txHash?: string;
}
export declare class CredentialsService {
    private credentials;
    issue(dto: CreateCredentialDto): Promise<Credential>;
    findAll(): Promise<Credential[]>;
    findOne(id: string): Promise<Credential | undefined>;
}
