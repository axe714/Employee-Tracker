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

const addRolePrompts = [
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
    name: "roleDepartment",
    message: "What department does this role belong to?",
    //TO DO: grab all departments from department table
    choices: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
  },
];


const addRole = (callback) => {
  db.promise()
    .query(`SELECT * FROM departments`)
    .then(results => {
      const choices = results[0].map(departments => {
        return {
          department: departments.department_name,
          id: departments.id,
        };
      });
      // console.log(choices);
    });
  inquirer.prompt(addRolePrompts).then((res) => {
    setTimeout(callback, 1000);
    console.table(res)
  });
};

module.exports = addRole;
