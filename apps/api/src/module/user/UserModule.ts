import { Module } from '@nestjs/common';
import { UserController } from '../../controller/user/UserController';
import { UserService } from '../../internal/user/UserService';
import { UserOrmMoudle } from '@app/datasource/domain/user/UserOrmMoudle';

@Module({
  imports: [UserOrmMoudle],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
