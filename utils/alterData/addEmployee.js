const inquirer = require("inquirer");
const db = require("../../config/connection");

const addEmployee = (callback) => {
  db.promise()
  .query(`SELECT * FROM roles`)
  .then((results) => {
    const choices = results[0].map((role) => {
      return {
        name: role.title,
        value: role.id,
      };
    });

  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What is the employee's role?",
        //TO DO: add a function to get all roles via unique id in database
        choices: choices
      },
    ])
    .then((response) => {
      //TO DO: add employee to the employee table
      setTimeout(callback, 2000);
      console.log(
        `You added ${response.first_name} ${response.last_name} as a ${response.role_id} to the employee table`
      );
    })
  })
};

module.exports = addEmployee;
