const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewDepartments = require("../viewData/viewDepartments");

const addManager = async () => {
  const { firstName, lastName, salary } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is your manager's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is your manager's last name?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is your manager's salary?",
    },
  ]);
  // console.log(firstName, lastName, salary);

  const availableDepartments = await viewDepartments();
  const { department_id } = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "What department does your manager preside over?",
      choices: availableDepartments[0].map((d) => ({
        name: d.department_name,
        value: d.department_id,
      })),
    },
  ]);
  // console.log(department_id);

  await db
    .promise()
    .query(
      `INSERT INTO managers (manager_first_name, manager_last_name, salary, department_id) VALUES ("${firstName}", "${lastName}", ${salary}, ${department_id});`
    );

  return console.log(
    `You added the manager ${firstName} ${lastName} with a salary of ${salary} to the managers table!`
  );
};

// ----------- OLD FUNCTION ------------------

// const addManager = (callback) => {
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
//             name: "manager_first_name",
//             message: "What is your manager's first name?",
//           },
//           {
//             type: "input",
//             name: "manager_last_name",
//             message: "What is your manager's last name?",
//           },
//           {
//             type: "input",
//             name: "salary",
//             message: "What is your manager's salary?",
//           },
//           {
//             type: "list",
//             name: "department_id",
//             message: "What department does your manager preside over?",
//             choices,
//           },
//         ])
//         .then((response) => {
//           if (!response.manager_first_name || !response.manager_last_name || !response.salary)
//           throw new Error("Please enter a value for all fields");
//           setTimeout(callback, 2000);
//           db.query(
//             `INSERT INTO managers (manager_first_name, manager_last_name, salary, department_id) VALUES ("${response.manager_first_name}", "${response.manager_last_name}", ${response.salary}, ${response.department_id});`
//           );
//           console.log(
//             `Sucessfully added ${response.manager_first_name} ${response.manager_last_name} as a manager with a salary of ${response.salary} to the managers table.`
//           );
//           //BROKEN. displays starterQuestion prompts twice.
//           // return viewManagers(callback);
//         });
//     });
// };

module.exports = addManager;
