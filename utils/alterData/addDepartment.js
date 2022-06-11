const inquirer = require("inquirer");
const db = require("../connection");
const viewDepartments = require("../viewData/viewDepartments");
//require index.js to call the starterQuestion function

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO departments (department_name) VALUES ("${response.addDepartment}");`,
        (err, results) => {
          if (err) throw err;
          viewDepartments();
        }
      );
    });
};

module.exports = addDepartment;