-- Holds the schema (basic creation of the database - table) --

-- Create database

-- Create three tables
DROP DATABASE IF EXISTS Database_Schema_DB;
CREATE DATABASE Database_Schema_DB;

USE Database_Schema_DB;

CREATE TABLE DEPARTMENT(
  id INT Primary Key,
  department_name VARCHAR(30)
);

CREATE TABLE role(
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary  DECIMAL, 
  department_id  INT,

)

CREATE TABLE employee
	id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INTDROP DATABASE IF EXISTS Database_Schema_DB;
CREATE DATABASE Database_Schema_DB;

USE Database_Schema_DB;

CREATE TABLE DEPARTMENT(
  id INT Primary Key,
  department_name VARCHAR(30)
);

CREATE TABLE role(
  id INT PRIMARY KEY
  title VARCHAR(30) to hold role title
  salary  DECIMAL to hold role salary
  department_id  INT to hold reference to department role belongs to



)

CREATE TABLE employee
	id INT PRIMARY KEY
  first_name VARCHAR(30) to hold employee first name
  last_name VARCHAR(30) to hold employee last name
  role_id INT to hold reference to role employee has
  manager_id INT, 