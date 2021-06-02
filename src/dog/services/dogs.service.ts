import { Injectable } from '@nestjs/common';
import { Dog } from '../models/dog.model';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(name: string, date_of_birth: string, breed: string, color: string) {
	let newDog = new Dog(name, date_of_birth, breed, color);
    this.dogs.push(newDog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}