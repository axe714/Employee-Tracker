const inquirer = require("inquirer");
const db = require("../connection");

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

module.exports = addEmployee;
