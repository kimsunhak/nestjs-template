import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/datasource/domain/user/User.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
})
export class UserOrmMoudle {}
