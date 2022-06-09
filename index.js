const inquirer = require("inquirer");
const cTable = require("console.table");
const fs = require("fs");

const starterQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "starterQuestion",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      switch (response.starterQuestion) {
        case "View All Departments":
          //TO DO: console.table all departments
          console.log(`You selected 'View All Departments'`);
          break;
        case "View All Roles":
          //TO DO: console.table all roles
          console.log(`You selected 'View All Roles'`);
          break;
        case "View All Employees":
          //TO DO: console.table all employees
          console.log(`You selected 'View All Employees'`);
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          console.log(`You selected 'Update Employee Role'`);
          break;
        case "Quit":
          console.log(`You selected 'Quit'`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((response) => {
      //TO DO: add the department to the department table
      console.log(
        `You added ${response.addDepartment} to the departmentsdatabase`
      );
    });
};

const addRole = () => {
  //TO DO: add roles into role table
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole",
        message: "What is the name of the role you would like to add?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role you would like to add?",
      },
      {
        type: "list",
        name: "roleDepartment",
        message: "What department does this role belong to?",
        //TO DO: grab all departments from department table using unique id
        choices: ["Placeholder1", "Placeholder2", "Placeholder3"],
      },
    ])
    .then((response) => {
      //TO DO: add role into the role table
      console.log(
        `You added ${response.addRole} with the salary of ${response.roleSalary} to the roles table`
      );
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        //TO DO: add a function to get all roles via unique id in database
        choices: ["Placeholder1", "Placeholder2", "Placeholder3"],
      },
    ])
    .then((response) => {
      //TO DO: add employee to the employee table
      console.log(
        `You added ${response.firstName} ${response.lastName} as a ${response.employeeRole} to the employee table`
      );
    });
};

const updateEmployee = () => {
  //TO DO: display all employees from employee table using unique id
};

const init = () => {
  starterQuestion();
};

init();
