import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsController } from './dog/controllers/dogs.controller';
import { DogsService } from './dog/services/dogs.service';
import { DogsModule } from './dog/modules/dogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DogsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
