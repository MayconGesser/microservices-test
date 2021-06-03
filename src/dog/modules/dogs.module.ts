import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsController } from '../controllers/dogs.controller';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../entities/dog.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Dog])],
	controllers: [DogsController],
	providers: [DogsService]
})
export class DogsModule {}