import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	name: string;
	
	@Column()
	date_of_birth: string;
	
	@Column()
	breed: string;
	
	@Column()
	color: string;
}