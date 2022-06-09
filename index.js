const inquirer = require("inquirer");
const fs = require("fs");

const starterQuestion = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "starterQuestion",
      message: "What would you like to do?",
      choices: [
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "View All Employees",
        "Quit",
      ],
    },
  ]);
};




const init = () => {
    starterQuestion();
}

init();
