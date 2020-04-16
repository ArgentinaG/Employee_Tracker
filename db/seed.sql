-- This holds the data that will be placed into your database and schema 
USE Database_Schema_DB;
Insert into DEPARTMENT
(department_name)
values
("Compliance"),
("Sales"),
("Human Resources"),
("Legal");
Insert into role
(title, salary, department_id)
values
("Sales Lead", 100000, 2),
("Compliance Officer", 80000, 1),
("Recruiter"), 50000, 3),
("Attorney") 90000, 4),
("Admin Assistant", 47000,3);
Insert into Employee
(first_name, last_name, role_id, manager_id)
values
("Scott", "Jones", 1, null),
("Sarah", "Doe", 2, 234),
("Dustin", "Carter", 3, 345),
("Jessica", "Patrick", 4, null);


