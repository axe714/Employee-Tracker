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

const starterQuestion = async () => {
  const { mainMenu } = await inquirer.prompt([
    {
      type: "list",
      name: "mainMenu",
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
        "Update An Employee",
        "Exit",
      ],
    },
  ]);
  switch (mainMenu) {
    case "View All Departments":
      viewDepartments()
      return setTimeout(starterQuestion, 2000)

    case "View All Roles":
      const showRoles = await viewRoles()
      console.table(showRoles[0])
      return setTimeout(starterQuestion, 2000)

    case "View All Managers":
      const showManagers = await viewManagers()
      console.table(showManagers[0])
      return setTimeout(starterQuestion, 2000)

    case "View All Employees":
      const showEmployees = await viewEmployees()
      console.table(showEmployees[0])
      return setTimeout(starterQuestion, 2000)

    case "Add Department":
      const addedDepartments = await addDepartment();
      viewDepartments()
      return setTimeout(starterQuestion, 2000)
      
    case "Add Role":
      addRole(starterQuestion);
      break;

    case "Add Manager":
      addManager(starterQuestion);
      break;

    case "Add Employee":
      addEmployee(starterQuestion);
      break;

    case "Update An Employee":
      updateEmployee(starterQuestion);
      break;

    case "Exit":
      console.log(`Goodbye!`);
      process.exit(1);
  }
};

const init = () => {
  starterQuestion();
};

init();
