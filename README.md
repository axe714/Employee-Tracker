# Employee-Tracker 📋

![MIT](https://img.shields.io/badge/License-MIT-blue.svg)

[![Employee Tracker Video](https://img.youtube.com/vi/yaZs5ZJZTcQ/0.jpg)](https://www.youtube.com/watch?v=yaZs5ZJZTcQ)

## Description 📍
- An employee tracker that utilizes a CLI to create, delete, read and update data inside a MySql database.

## Table Of Contents 📜
* [Installation](#installation)
* [Youtube](#youtube)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Github Repository](#github-repository)
* [Contact](#contact-information)
    * [Github](#github)
    * [Email](#email)

## Installation 
 1. Run ``` npm i ``` in the terminal to install the required dependencies
 2. Edit the ```.env file``` and input the required MySql credentials
 3. Run the ```schema.sql``` and ```seeds.sql``` files (located in db folder) in chronological order in MySql.
 4. Run ```node index.js``` in the terminal to launch the CLI

## Youtube 
- [Employee Tracker Demo](https://www.youtube.com/watch?v=yaZs5ZJZTcQ)

## Usage 
- This application uses a CLI to access and edit files inside a mock company's database using MySql queries. 
- The database consists of 4 tables related to each other:
```
1. Departments Table (parent table)
    - Department Id (primary key)
    - Department Name

2. Roles Table
    - Role Id (primary key)
    - Title
    - Salary
    - Department Id (References department id in parent table)

3. Managers Table
    - Manager Id (primary key)
    - Manager First Name
    - Manager Last Name
    - Salary
    - Department Id (References parent table)

4. Employees Table
    - Employee Id (primary key)
    - Employee First Name
    - Employee Last Name
    - Role Id (References roles table)
    - Manager Id (References managers table)
```

- Functionalities of the application include: 
```
1. Add, delete and view departments
2. Add, delete and view roles
3. Add, delete and view managers
4. Add, view, delete, and modify an employee
5. Sort employees by manager, department or role
```

## License 
- This project uses the following license:<br>
     - ***MIT***

## Contribution Guidelines 
- All contributors are welcome! Please don't hesitate to contact me below to contribute to this project.

## Github Repository 
- [Employee Tracker](https://github.com/axe714/Employee-Tracker)

## Contact Information 
- [Github Profile - Axe714](www.github.com/axe714)

### Email:
- For inquiries/questions, please reach out to me at axe@github.com
