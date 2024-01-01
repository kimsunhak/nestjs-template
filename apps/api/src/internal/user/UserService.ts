import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@app/datasource/domain/user/User.entity';
import { Repository } from 'typeorm';
import { QueryRunnerTransactional } from '@app/datasource/support/QueryRunnerTransactional';
import { UserInformationResponse } from '../../dto/user/UserInformationResponse';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private queryRunnerTransactional: QueryRunnerTransactional,
  ) {}

  async get(id: string): Promise<UserInformationResponse> {
    const user = await this.userRepository.findOne({ id: id });
    return UserInformationResponse.from(user);
  }

  async create(singUpUser: UserEntity): Promise<UserInformationResponse> {
    const user = await this.queryRunnerTransactional.writable(() => {
      return this.userRepository.save(singUpUser);
    });
    return UserInformationResponse.from(user);
  }
}
