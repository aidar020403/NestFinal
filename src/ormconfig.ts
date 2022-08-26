import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nestfinal',
  password: '123',
  database: 'nestfinal',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};

export default config;
