import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

/**
 * QueryRunnerTransactional
 *
 * QueryRunner를 이용한 트랜잭션을 제어하기 위해 만든 class 입니다.
 * AOP를 사용하여 Transactional을 제어하는것 보다 직접적으로 선언하여 관리하는것이 조금 더 유익한 거 같아 만들었습니다.
 */
@Injectable()
export class QueryRunnerTransactional {
  constructor(private connection: Connection) {}
  async writable<T>(logic: () => Promise<T>) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      return await logic();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error(error);
    } finally {
      await queryRunner.commitTransaction();
      await queryRunner.release();
    }
  }
}
