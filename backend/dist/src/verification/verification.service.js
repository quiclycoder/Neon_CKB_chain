"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const axios_1 = __importDefault(require("axios"));
let VerificationService = class VerificationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async initiate(dto) {
        const organization = await this.prisma.organization.findUnique({
            where: { id: dto.organizationId },
        });
        if (!organization) {
            throw new common_1.NotFoundException('Organization not found');
        }
        const existingRequest = await this.prisma.verificationRequest.findFirst({
            where: {
                orgId: dto.organizationId,
                type: dto.type,
                status: client_1.RequestStatus.PENDING,
            },
        });
        if (existingRequest) {
            return existingRequest;
        }
        return this.prisma.verificationRequest.create({
            data: {
                orgId: dto.organizationId,
                type: dto.type,
                status: client_1.RequestStatus.PENDING,
            },
        });
    }
    async verifyWebsite(dto) {
        const request = await this.prisma.verificationRequest.findUnique({
            where: { id: dto.verificationRequestId },
            include: { organization: true },
        });
        if (!request) {
            throw new common_1.NotFoundException('Verification request not found');
        }
        if (request.type !== client_1.VerificationType.WEBSITE) {
            throw new common_1.BadRequestException('Invalid verification type');
        }
        if (request.status !== client_1.RequestStatus.PENDING) {
            throw new common_1.BadRequestException('Request is not pending');
        }
        const domain = request.organization.name;
        try {
            const url = `https://${domain}/.well-known/neon-verify.json`;
            const response = await axios_1.default.get(url);
            if (response.data && (JSON.stringify(response.data).includes(request.orgId) || response.data.includes(request.orgId))) {
                await this.prisma.$transaction([
                    this.prisma.verificationRequest.update({
                        where: { id: request.id },
                        data: { status: client_1.RequestStatus.APPROVED },
                    }),
                    this.prisma.organization.update({
                        where: { id: request.orgId },
                        data: { verificationStatus: client_1.VerificationStatus.WEBSITE },
                    }),
                ]);
                return { success: true };
            }
            else {
                throw new common_1.BadRequestException('Verification token not found on website');
            }
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('Could not verify website. Ensure the file exists and is accessible.');
        }
    }
    async verifyTwitter(dto) {
        const request = await this.prisma.verificationRequest.findUnique({
            where: { id: dto.verificationRequestId },
        });
        if (!request) {
            throw new common_1.NotFoundException('Verification request not found');
        }
        if (request.type !== client_1.VerificationType.TWITTER) {
            throw new common_1.BadRequestException('Invalid verification type');
        }
        if (request.status !== client_1.RequestStatus.PENDING) {
            throw new common_1.BadRequestException('Request is not pending');
        }
        const twitterRegex = /^https?:\/\/(www\.)?(twitter|x)\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+$/;
        if (!twitterRegex.test(dto.tweetUrl)) {
            throw new common_1.BadRequestException('Invalid Twitter URL format');
        }
        await this.prisma.$transaction([
            this.prisma.verificationRequest.update({
                where: { id: request.id },
                data: { status: client_1.RequestStatus.APPROVED },
            }),
            this.prisma.organization.update({
                where: { id: request.orgId },
                data: { verificationStatus: client_1.VerificationStatus.TWITTER },
            }),
        ]);
        return { success: true };
    }
};
exports.VerificationService = VerificationService;
exports.VerificationService = VerificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VerificationService);
//# sourceMappingURL=verification.service.js.map