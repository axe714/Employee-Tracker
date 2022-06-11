const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewDepartments = require("../viewData/viewDepartments");

const addDepartment = (callback) => {
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
          viewDepartments(callback);
        }
      );
    });
};

module.exports = addDepartment;
