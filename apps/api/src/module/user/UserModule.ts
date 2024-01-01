import { Module } from '@nestjs/common';
import { UserController } from '../../controller/user/UserController';
import { UserService } from '../../internal/user/UserService';
import { UserOrmMoudle } from '@app/datasource/domain/user/UserOrmMoudle';
import { QueryRunnerTransactional } from '@app/datasource/support/QueryRunnerTransactional';

@Module({
  imports: [UserOrmMoudle],
  providers: [UserService, QueryRunnerTransactional],
  controllers: [UserController],
})
export class UserModule {}
