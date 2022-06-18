const inquirer = require("inquirer");
const db = require("../../config/connection");

const deleteEmployee = async () => {
  const employeeRoleTable = await db
    .promise()
    .query(
      `SELECT employees.employee_id, employees.first_name, employees.last_name, employees.role_id, roles.title FROM employees LEFT JOIN roles ON employees.role_id = roles.role_id;`
    );

  const { employee_id } = await inquirer.prompt([
    {
      type: "list",
      name: "employee_id",
      message: "Which employee would you like to delete?",
      choices: employeeRoleTable[0].map((e) => ({
        name: e.first_name + " " + e.last_name + " (" + e.title + ")",
        value: e.employee_id,
      })),
    },
  ]);

  await db
    .promise()
    .query(`DELETE FROM employees WHERE employee_id = ${employee_id}`);
  return console.log(`Successfully deleted employee!`);
};

module.exports = deleteEmployee;
