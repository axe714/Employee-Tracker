DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE managers (
    manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    manager_first_name VARCHAR(30) NOT NULL,
    manager_last_name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id) ON DELETE SET NULL
);


-- Run these to easily items inside different tables --
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM managers;
SELECT * FROM employees;

