DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE manager (
    manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    manager_first_name VARCHAR(30) NOT NULL,
    manager_last_name VARCHAR(30) NOT NULL,
    department_id INT, 
    salary DECIMAL NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT ON DELETE SET NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
    FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);
