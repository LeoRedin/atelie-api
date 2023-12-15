import { get } from 'env-var';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import '../shared/utils/dotenv';

export const databaseConfig = {
  type: 'postgres',
  host: get('DB_HOST').required().asString(),
  port: get('DB_PORT').required().asIntPositive(),
  username: get('DB_USERNAME').required().asString(),
  password: get('DB_PASSWORD').required().asString(),
  database: get('DB_NAME').required().asString(),
} satisfies TypeOrmModuleOptions;
