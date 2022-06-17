const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewDepartments = require("../viewData/viewDepartments");

const addRole = async () => {
  const { title, salary } = await inquirer.prompt([
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
  ]);
  console.log(title);
  console.log(salary);

  const availableDepartments = await viewDepartments();
  const { department_id } = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "What department does this role belong to?",
      choices: availableDepartments[0].map((d) => ({
        name: d.department_name,
        value: d.department_id,
      })),
    },
  ]);
  console.log(department_id);

  await db.promise().query(
    `INSERT INTO roles (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id});`
  );

  return console.log(`You added ${title} with a salary of ${salary} to the roles table!`)
};


// --------- OLD FUNCTION -------------

// const addRole = (callback) => {
//   db.promise()
//     .query(`SELECT * FROM departments`)
//     .then((results) => {
//       const choices = results[0].map((departments) => {
//         return {
//           name: departments.department_name,
//           value: departments.id,
//         };
//       });
//       // console.table(choices);
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "title",
//             message: "What is the name of the role you would like to add?",
//           },
//           {
//             type: "input",
//             name: "salary",
//             message: "What is the salary of the role you would like to add?",
//           },
//           {
//             type: "list",
//             name: "department_id",
//             message: "What department does this role belong to?",
//             choices,
//           },
//         ])
//         .then((response) => {
//           if (!response.title || !response.salary)
//           throw new Error("Please enter a value for all fields");
//           setTimeout(callback, 2000);
//           db.query(
//             `INSERT INTO roles (title, salary, department_id) VALUES ("${response.title}", ${response.salary}, ${response.department_id});`
//           );
//           console.log(
//             `Sucessfully added ${response.title} with a salary of ${response.salary} to the roles table.`
//           );
//           //BROKEN. displays starterQuestion prompts twice.
//           // viewRoles(callback)
//         });
//     });
// };

module.exports = addRole;
