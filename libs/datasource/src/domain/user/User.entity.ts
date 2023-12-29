import { BaseEntity } from '@app/datasource/domain/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userName: string;

  @Column({ default: true })
  isActive: boolean;

  static signUp(userName: string): UserEntity {
    const user = new UserEntity();
    user.userName = userName;
    return user;
  }
}
