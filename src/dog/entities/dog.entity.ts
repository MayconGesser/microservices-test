import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'dogs'})
export class Dog {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	name: string;
	
	@Column()
	date_of_birth: string;
	
	@Column()
	breed: number;
	
	@Column()
	color: number;
}