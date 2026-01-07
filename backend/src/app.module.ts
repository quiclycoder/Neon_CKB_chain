import { Module } from '@nestjs/common';
// import { PrismaModule } from './prisma/prisma.module';
// import { OrganizationsModule } from './organizations/organizations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { VerificationModule } from './verification/verification.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CredentialsModule } from './credentials/credentials.module';


@Module({
  imports: [DashboardModule, CredentialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

