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
      if (!response.addDepartment)
        throw new Error("Please enter a department name");
      db.query(
        `INSERT INTO departments (department_name) VALUES ("${response.addDepartment}");`,
        (err, results) => {
          return viewDepartments(callback);
        }
      );
    });
};

module.exports = addDepartment;
