const inquirer = require("inquirer");
const db = require("./config/connection");
const viewDepartments = require("./utils/viewData/viewDepartments");
const viewRoles = require("./utils/viewData/viewRoles.js");
const viewManagers = require("./utils/viewData/viewManagers.js");
const viewEmployees = require("./utils/viewData/viewEmployees.js");
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
          viewDepartments(starterQuestion);
          break
          // .then(results => {
          //   console.table(results);
          //   setTimeout(starterQuestion, 2000);
          // });
          

        case "View All Roles":
          viewRoles(starterQuestion);
          break;

        case "View All Managers":
          viewManagers(starterQuestion);
          break;

        case "View All Employees":
          viewEmployees(starterQuestion);
          break;

        case "Add Department":
          addDepartment(starterQuestion);
          break;

        case "Add Role":
          addRole(starterQuestion);
          break;

        case "Add Manager":
          addManager(starterQuestion);
          break;

        case "Add Employee":
          addEmployee(starterQuestion);
          break;

        case "Update Employee Role":
          updateEmployee(starterQuestion);
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

