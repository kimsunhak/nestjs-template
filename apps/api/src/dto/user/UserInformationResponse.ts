import { UserEntity } from '@app/datasource/domain/user/User.entity';

export class UserInformationResponse {
  readonly id: string;
  readonly userName: string;

  constructor(id: string, userName: string) {
    this.id = id;
    this.userName = userName;
  }

  static from(userEntity: UserEntity): UserInformationResponse {
    return new UserInformationResponse(userEntity.id, userEntity.userName);
  }
}
