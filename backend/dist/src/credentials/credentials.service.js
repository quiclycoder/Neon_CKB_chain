"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsService = void 0;
const common_1 = require("@nestjs/common");
let CredentialsService = class CredentialsService {
    credentials = [];
    async issue(dto) {
        const credential = {
            id: `cred_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            ...dto,
            issuedAt: new Date(),
            status: 'pending',
        };
        this.credentials.push(credential);
        setTimeout(() => {
            credential.status = 'minted';
            credential.txHash = `0x${Math.random().toString(16).substr(2, 64)}`;
        }, 3000);
        return credential;
    }
    async findAll() {
        return this.credentials;
    }
    async findOne(id) {
        return this.credentials.find(c => c.id === id);
    }
};
exports.CredentialsService = CredentialsService;
exports.CredentialsService = CredentialsService = __decorate([
    (0, common_1.Injectable)()
], CredentialsService);
//# sourceMappingURL=credentials.service.js.map