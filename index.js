const inquirer = require("inquirer");
const fs = require("fs");

const starterQuestion = () => {
  inquirer
    .prompt([
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
    ])
    .then((response) => {
      switch (response.starterQuestion) {
        case "Update Employee Role":
          console.log(`You selected 'Update Employee Role'`);
          break;
        case "View All Roles":
          console.log(`You selected 'View All Roles'`);
          break;
        case "Add Role":
          console.log(`You selected 'Add Role'`);
          break;
        case "View All Departments":
          console.log(`You selected 'View All Departments'`);
          break;
        case "Add Department":
          console.log(`You selected 'Add Department'`);
          break;
        case "View All Employees":
          console.log(`You selected 'View All Employees'`);
          break;
        case "Quit":
          console.log(`You selected 'Quit'`);
          break;
      }
    });
};

const init = () => {
  starterQuestion();
};

init();
