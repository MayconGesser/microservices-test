import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Dog } from './src/dog/entities/dog.entity';

const config: MysqlConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "microservice_user",
  password: "1234",
  database: "microservices_test",
  entities: [Dog],
  synchronize: true
}

export default config;