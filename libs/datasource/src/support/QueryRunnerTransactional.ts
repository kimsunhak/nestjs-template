import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

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
