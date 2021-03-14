USE employee_db;

INSERT INTO department (name) VALUES ("Clinical Engineering");
INSERT INTO department (name) VALUES ("Facilities");
INSERT INTO department (name) VALUES ("HR");
INSERT INTO department (name) VALUES ("IT");

INSERT INTO role (title, salary, department_id) VALUES ("Clinical Engineer Tech", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Plumber", 50000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 80000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("David", "Jester", 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Abby", "Whiteman", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Katie", "Pieto", 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Rachael", "Squirm", 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lizzie", "Halep", 1);