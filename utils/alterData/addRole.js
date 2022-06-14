const inquirer = require("inquirer");
const db = require("../../config/connection");

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
      const departmentChoice = results[0].map((departments) => {
        return {
          department_name: departments.department_name,
          value: departments.id,
        };
      });
      console.table(departmentChoice);
      inquirer
        .prompt([
          {
            type: "input",
            name: "roleName",
            message: "What is the name of the role you would like to add?",
          },
          {
            type: "input",
            name: "roleSalary",
            message: "What is the salary of the role you would like to add?",
          },
          {
            type: "list",
            name: "department_id",
            message: "What department does this role belong to?",
            //TO DO: grab all departments from department table
            choices: departmentChoice,
          },
        ])
        .then((res) => {
          setTimeout(callback, 1000);
          console.table(res);
        });
    });
};

module.exports = addRole;
