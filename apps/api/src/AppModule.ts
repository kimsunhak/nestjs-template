import { Module } from '@nestjs/common';
import { databaseConfig } from '@app/datasource/config/DatabaseConfig';
import { UserModule } from './module/user/UserModule';
import { HealthModule } from './module/health/HealthModule';

@Module({
  imports: [databaseConfig(), HealthModule, UserModule],
})
export class AppModule {}
