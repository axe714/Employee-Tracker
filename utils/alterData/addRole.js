const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewManagers = require("../viewData/viewManagers");
const viewRoles = require("../viewData/viewRoles");

// const departmentChoice = () => {
//   db.promise().query(`SELECT * FROM departments`, (err, results) => {
//     if (err) throw err;
//   }).then((departments) => {
//     return {
//       name: departments.department_name,
//       id: departments.id,
// };
//   })
// };

// const addRolePrompts = [
//   {
//     type: "input",
//     name: "roleName",
//     message: "What is the name of the role you would like to add?",
//   },
//   {
//     type: "input",
//     name: "roleSalary",
//     message: "What is the salary of the role you would like to add?",
//   },
//   {
//     type: "list",
//     name: "roleDepartment",
//     message: "What department does this role belong to?",
//     //TO DO: grab all departments from department table
//     choices: departmentChoice
//   },
// ];

const addRole = (callback) => {
  db.promise()
    .query(`SELECT * FROM departments`)
    .then((results) => {
      const choices = results[0].map((departments) => {
        return {
          name: departments.department_name,
          value: departments.id,
        };
      });
      // console.table(choices);
      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the name of the role you would like to add?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the role you would like to add?",
          },
          {
            type: "list",
            name: "department_id",
            message: "What department does this role belong to?",
            choices,
          },
        ])
        .then((response) => {
          if (!response.title || !response.salary)
          throw new Error("Please enter a value for all fields");
          setTimeout(callback, 2000);
          db.query(
            `INSERT INTO roles (title, salary, department_id) VALUES ("${response.title}", ${response.salary}, ${response.department_id});`
          );
          console.log(
            `Sucessfully added ${response.title} with a salary of ${response.salary} to the roles table.`
          );
          //BROKEN. displays starterQuestion prompts twice.
          // viewRoles(callback)
        });
    });
};

module.exports = addRole;
