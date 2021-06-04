import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { Dog } from '../entities/dog.entity';
import { DogsService } from '../services/dogs.service';

@Controller('dogs')
export class DogsController {
	constructor(private dogsService: DogsService) {}
	
	@Get()
	findAll(): Promise<Dog[]> {
		return this.dogsService.findAll();
	}

	@Get(':id')
	findById(@Param('id') dogId: string): Promise<Dog[]> {
		return this.dogsService.findById(dogId);
	}
	
	@Post()
	async create(
	@Body('name') name: string, 
	@Body('date_of_birth') date_of_birth: string, 
	@Body('breed') breed: number,
	@Body('color') color: number
	): Promise<Dog>{		
		return this.dogsService.create(name, date_of_birth, breed, color);
	}

	@Patch(':id')
	async update(
		@Param('id') dogId: string,
		@Body('name') name: string, 
		@Body('date_of_birth') date_of_birth: string, 
		@Body('breed') breed: number,
		@Body('color') color: number
		): Promise<Dog>{
			return this.dogsService.update(dogId, name, date_of_birth, breed, color);
	}

	@Delete(':id')
	async remove(
		@Param('id') dogId: string
	): Promise<any> {
		return this.dogsService.remove(dogId);
	}
}