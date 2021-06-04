create database if not exists microservices_test;

use microservices_test;

create table breeds(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(150)
);

create table colors(
	id SMALLINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(150)
);

create table dogs(
	id INT AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(100), 
	date_of_birth DATE, 
	breed SMALLINT, 
	color SMALLINT,
	FOREIGN KEY (breed) REFERENCES breeds(id),
	FOREIGN KEY (color) REFERENCES colors(id)
);

CREATE INDEX dogs_index ON dogs (name, date_of_birth);