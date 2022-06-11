const inquirer = require("inquirer");
const db = require("../../config/connection");

const addRole = () => {
  //TO DO: add roles into role table
  // const departmentChoices = db
  //   .query(`SELECT * from departments`)
  //   .then((departments) => {});
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
        //TO DO: grab all departments from department table
        choices: ["Placeholder 1", "PlaceHolder 2"],
      },
    ])
    .then((response) => {
      //TO DO: add role into the role table
      console.log(
        `You added ${response.addRole} with the salary of ${response.roleSalary} to the roles table`
      );
    });
};

module.exports = addRole;
