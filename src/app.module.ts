import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsController } from './dog/controllers/dogs.controller';
import { DogsService } from './dog/services/dogs.service';
import { DogsModule } from './dog/modules/dogs.module';
import { Dog } from './dog/entities/dog.entity';
import config  from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), DogsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
