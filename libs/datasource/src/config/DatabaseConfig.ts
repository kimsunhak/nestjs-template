import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { env } from '@app/datasource/config/env';

export const databaseConfig = () => {
  const entityPath = path.join(__dirname, 'src/domain/**/*.entity.{.ts,js}');
  return TypeOrmModule.forRoot({
    type: env.database.type,
    host: env.database.host,
    port: env.database.port,
    database: env.database.database,
    username: env.database.username,
    password: env.database.password,
    synchronize: env.database.synchronize,
    entities: [entityPath],
    autoLoadEntities: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
  });
};
