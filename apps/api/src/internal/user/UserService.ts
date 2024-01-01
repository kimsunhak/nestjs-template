import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@app/datasource/domain/user/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private useRepository: Repository<UserEntity>,
  ) {}

  getUser(): string {
    return 'shower';
  }

  async create(sinUpUser: UserEntity): Promise<void> {
    await this.useRepository.save(sinUpUser);
  }
}
