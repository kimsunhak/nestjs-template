import { Module } from '@nestjs/common';
import { databaseConfig } from '@app/datasource/config/DatabaseConfig';
import { UserApiModule } from './user/UserApiModule';

@Module({
  imports: [databaseConfig(), UserApiModule],
})
export class ApiAppModule {}
