import * as path from 'path';
import * as dotenv from 'dotenv';
import * as process from 'process';

const config = dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

if (config.error) {
  throw config.error;
}

export const env = {
  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  },
};
