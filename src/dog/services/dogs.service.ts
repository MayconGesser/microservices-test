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
		const newDog = this.dogsRepository.create({name, date_of_birth, breed, color});
		return this.dogsRepository.save(newDog);
		
		// let newDog = new Dog(name, date_of_birth, breed, color);
		// this.dogs.push(newDog);
	}

	findAll(): Promise<Dog[]> {
		return this.dogsRepository.find();		//SELECT * FROM dogs
	}
}