const inquirer = require("inquirer");
const db = require("../../config/connection");

const addManager = (callback) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerFirstName",
        message: "What is your manager's first name?",
      },
      {
        type: "input",
        name: "managerLastName",
        message: "What is your manager's last name?",
      },
      {
        type: "list",
        name: "managerDepartment",
        message: "What department does your manager preside over?",
        choices: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
      },
      {
        type: "input",
        name: "managerSalary",
        message: "What is your manager's salary?",
      },
    ])
    .then((response) => {
      console.log(
        `You created the manager ${response.managerFirstName} ${response.managerLastName} that manages the ${response.managerDepartment} department. Their salary is ${response.managerSalary}.`
      );
    })
    .then(() => {
      setTimeout(callback, 1000);
    });
};

module.exports = addManager;
