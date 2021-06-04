import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from '../entities/dog.entity';

@Injectable()
export class DogsService {	
	constructor(
		@InjectRepository(Dog) private dogsRepository: Repository<Dog>
	){}
	
	private readonly dogs: Dog[] = [];

	create(name: string, date_of_birth: string, breed: number, color: number): Promise<Dog> {
		let date_split = date_of_birth.split('/');
		let day = date_split[0];
		let month = date_split[1];
		let year = date_split[2];
		date_of_birth = year + '-' + month + '-' + day;
		const newDog = this.dogsRepository.create({name, date_of_birth, breed, color});
		return this.dogsRepository.save(newDog);
	}

	findAll(): Promise<Dog[]> {
		return this.dogsRepository.find();		//SELECT * FROM dogs
	}

	findById(dogId: string): Promise<Dog[]> {		//SELCT * FROM dogs WHERE id = ?
		return this.dogsRepository.find({
			where: {
				id: dogId
			}
		});
	}

	async update(dogId: string, name: string, date_of_birth: string, breed: number, color: number): Promise<Dog>{
		const result = await this.findById(dogId);
		const dog = result[0];
		dog.name = name || dog.name;
		dog.breed = breed || dog.breed;
		dog.color = color || dog.color;
		if(date_of_birth){
			let date_split = date_of_birth.split('/');
			let day = date_split[0];
			let month = date_split[1];
			let year = date_split[2];
			let normalizedDate = year + '-' + month + '-' + day;
			dog.date_of_birth = normalizedDate;
		}	
			
		return this.dogsRepository.save(dog);
	}
}