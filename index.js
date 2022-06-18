const inquirer = require("inquirer");
const db = require("./config/connection");
const viewDepartments = require("./utils/viewData/viewDepartments");
const viewRoles = require("./utils/viewData/viewRoles.js");
const viewManagers = require("./utils/viewData/viewManagers.js");
const viewEmployees = require("./utils/viewData/viewEmployees.js");
const viewByDepartment = require("./utils/viewData/viewByDepartment")
const viewByManager = require("./utils/viewData/viewByManager")
const addDepartment = require("./utils/alterData/addDepartment");
const addRole = require("./utils/alterData/addRole");
const addManager = require("./utils/alterData/addManager");
const addEmployee = require("./utils/alterData/addEmployee");
const updateEmployee = require("./utils/alterData/updateEmployee");
const deleteManager = require("./utils/alterData/deleteManager")
const deleteRole = require("./utils/alterData/deleteRole");
const deleteDepartment = require("./utils/alterData/deleteDepartment");


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
        "Sort Employees by Department",
        "Sort Employees by Manager",
        "Add Department",
        "Add Role",
        "Add Manager",
        "Add Employee",
        "Update An Employee",
        "Delete A Manager",
        "Delete A Role",
        "Delete A Department",
        "Exit",
      ],
    },
  ]);
  switch (mainMenu) {
    case "View All Departments":
      const showDepartments = await viewDepartments()
      console.table(showDepartments[0])
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

    case "Sort Employees by Department":
      const employeesByDept = await viewByDepartment();
      console.table(employeesByDept[0])
      return setTimeout(starterQuestion, 2000)

    case "Sort Employees by Manager":
      const employeesByManager = await viewByManager();
      console.table(employeesByManager[0])
      return setTimeout(starterQuestion, 2000)

    case "Add Department":
      const addedDepartments = await addDepartment();
      return setTimeout(starterQuestion, 2000)
      
    case "Add Role":
      const addedRole = await addRole();
      return setTimeout(starterQuestion, 2000)

    case "Add Manager":
      const addedManager = await addManager();
      return setTimeout(starterQuestion, 2000)

    case "Add Employee":
      const addedEmployee = await addEmployee();
      return setTimeout(starterQuestion, 2000)

    case "Update An Employee":
      const updatedEmployee = await updateEmployee();
      return setTimeout(starterQuestion, 2000);

    case "Delete A Manager":
      const deletedManager = await deleteManager();
      return setTimeout(starterQuestion, 2000)

    case "Delete A Role":
      const deletedRole = await deleteRole();
      return setTimeout(starterQuestion, 2000)

    case "Delete A Department":
      const deletedDepartment = await deleteDepartment();
      return setTimeout(starterQuestion, 2000)

    case "Exit":
      console.log(`Goodbye!`);
      process.exit(1);
  }
};

const init = () => {
  starterQuestion();
};

init();

