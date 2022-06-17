const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewDepartments = require("../viewData/viewDepartments");

const addDepartment = async () => {
  const { departmentName } = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is the name of the department you would like to add?",
    },
  ]);
  await db.promise().query(
    `INSERT INTO departments (department_name) VALUES ("${departmentName}");`
  );
  return console.log(
    `Successfully added ${departmentName} to the departments table.`
  );
};

// ------- OLD FUNCTION ----------

// const addDepartment = (callback) => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "addDepartment",
//         message: "What is the name of the department you would like to add?",
//       },
//     ])
//     .then((response) => {
//       if (!response.addDepartment)
//         throw new Error("Please enter a department name");
//       db.query(
//         `INSERT INTO departments (department_name) VALUES ("${response.addDepartment}");`,
//         (err, results) => {
//           console.log(
//             `Successfully added ${response.addDepartment} to the departments table.`
//           );
//           return viewDepartments(callback);
//         }
//       );
//     });
// };

module.exports = addDepartment;
