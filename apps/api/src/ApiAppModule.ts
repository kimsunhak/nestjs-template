import { Module } from '@nestjs/common';
import { getPgTypeOrmModule } from '../../../libs/datasource/getPgTypeOrmModule';
import { UserApiModule } from './user/UserApiModule';

@Module({
  imports: [getPgTypeOrmModule(), UserApiModule],
})
export class ApiAppModule {}
