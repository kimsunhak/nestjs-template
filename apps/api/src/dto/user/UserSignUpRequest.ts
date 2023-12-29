import { UserEntity } from '@app/datasource/domain/user/User.entity';

export class UserSignUpRequest {
  userName: string;

  toEntity(): UserEntity {
    return UserEntity.signUp(this.userName);
  }
}
