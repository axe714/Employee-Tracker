const db = require("../../config/connection");
const inquirer = require("inquirer");
const viewDepartments = require("../viewData/viewDepartments");

const deleteDepartment = async () => {
  const departments = await viewDepartments();

  const { department_id } = await inquirer.prompt([
    {
      type: "list",
      name: "department_id",
      message: "Which department would you like to delete?",
      choices: departments[0].map((d) => ({
        name: d.department_name,
        value: d.department_id,
      })),
    },
  ]);

  await db
    .promise()
    .query(`DELETE FROM departments WHERE department_id = ${department_id}`);

  return console.log(`Department has been deleted!`);
};

module.exports = deleteDepartment;
