import { Controller, Get, Post, Body } from '@nestjs/common';
import { Dog } from '../models/dog.model';
import { DogsService } from '../services/dogs.service';

@Controller('dogs')
export class DogsController {
	constructor(private dogsService: DogsService) {}
	
	@Get()
	findAll(): Dog[] {
		return this.dogsService.findAll();
	}
	
	@Post()
	async create(
	@Body('name') name: string, 
	@Body('date_of_birth') date_of_birth: string, 
	@Body('breed') breed: string,
	@Body('color') color: string
	){
		this.dogsService.create(name, date_of_birth, breed, color);
	}
}