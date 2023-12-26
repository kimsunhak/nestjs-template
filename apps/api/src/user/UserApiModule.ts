import { Module } from '@nestjs/common';
import { UserService } from './UserService';
import { UserApiController } from './UserApiController';

@Module({
  imports: [],
  controllers: [UserApiController],
  providers: [UserService],
})
export class UserApiModule {}
