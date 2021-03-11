DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
    id INTEGER auto_increment NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER auto_increment NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE department (
    id INTEGER auto_increment NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

