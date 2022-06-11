const inquirer = require("inquirer");
const db = require("./utils/connection");
const viewDepartments = require("./utils/viewData/viewDepartments");
const viewRoles = require("./utils/viewData/viewRoles.js")
const viewManagers = require("./utils/viewData/viewManagers.js")
const viewEmployees = require("./utils/viewData/viewEmployees.js")
const addDepartment = require("./utils/alterData/addDepartment");
const addRole = require("./utils/alterData/addRole");
const addManager = require("./utils/alterData/addManager");
const addEmployee = require("./utils/alterData/addEmployee");
const updateEmployee = require("./utils/alterData/updateEmployee");

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
          "View All Managers",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Manager",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      switch (response.starterQuestion) {
        case "View All Departments":
          viewDepartments();
          return init();

        case "View All Roles":
          viewRoles();
          break;

        case "View All Managers":
          viewManagers();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Manager":
          addManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        case "Exit":
          console.log(`Goodbye!`);
          process.exit(1);
      }
    });
};

const init = () => {
  starterQuestion();
};

init();

module.exports = init
