DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INTEGER auto_increment NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER auto_increment NOT NULL,
    Title VARCHAR(30) NOT NULL,
    Salary DOUBLE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INTEGER auto_increment NOT NULL,
    First_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    Role_id INTEGER NOT NULL,
    Manager_id INTEGER,
    PRIMARY KEY(id)
);