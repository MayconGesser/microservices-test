import { Controller, Get, Post, Body } from '@nestjs/common';
import { Dog } from '../entities/dog.entity';
import { DogsService } from '../services/dogs.service';

@Controller('dogs')
export class DogsController {
	constructor(private dogsService: DogsService) {}
	
	@Get()
	findAll(): Promise<Dog[]> {
		return this.dogsService.findAll();
	}
	
	@Post()
	async create(
	@Body('name') name: string, 
	@Body('date_of_birth') date_of_birth: string, 
	@Body('breed') breed: number,
	@Body('color') color: number
	){
		let date_split = date_of_birth.split('/');
		let day = date_split[0];
		let month = date_split[1];
		let year = date_split[2];
		let normalizedDate = year + '-' + month + '-' + day;
		return this.dogsService.create(name, normalizedDate, breed, color);
	}
}