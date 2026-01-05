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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationController = void 0;
const common_1 = require("@nestjs/common");
const verification_service_1 = require("./verification.service");
const initiate_verification_dto_1 = require("./dto/initiate-verification.dto");
const verify_website_dto_1 = require("./dto/verify-website.dto");
const verify_twitter_dto_1 = require("./dto/verify-twitter.dto");
let VerificationController = class VerificationController {
    verificationService;
    constructor(verificationService) {
        this.verificationService = verificationService;
    }
    initiate(dto) {
        return this.verificationService.initiate(dto);
    }
    verifyWebsite(dto) {
        return this.verificationService.verifyWebsite(dto);
    }
    verifyTwitter(dto) {
        return this.verificationService.verifyTwitter(dto);
    }
};
exports.VerificationController = VerificationController;
__decorate([
    (0, common_1.Post)('initiate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [initiate_verification_dto_1.InitiateVerificationDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "initiate", null);
__decorate([
    (0, common_1.Post)('verify-website'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_website_dto_1.VerifyWebsiteDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "verifyWebsite", null);
__decorate([
    (0, common_1.Post)('verify-twitter'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_twitter_dto_1.VerifyTwitterDto]),
    __metadata("design:returntype", void 0)
], VerificationController.prototype, "verifyTwitter", null);
exports.VerificationController = VerificationController = __decorate([
    (0, common_1.Controller)('verification'),
    __metadata("design:paramtypes", [verification_service_1.VerificationService])
], VerificationController);
//# sourceMappingURL=verification.controller.js.map