const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewRoles = require("../viewData/viewRoles");

const changeEmployeeRole = async () => {
  let employeeRoleTable = await db
    .promise()
    .query(
      `SELECT employees.employee_id, employees.first_name, employees.last_name, employees.role_id, roles.title FROM employees LEFT JOIN roles ON employees.role_id = roles.role_id;`
    );

  const { employee_id } = await inquirer.prompt([
    {
      type: "list",
      name: "employee_id",
      message: "Which employee's role would you like to change?",
      choices: employeeRoleTable[0].map((e) => ({
        name: e.first_name + " " + e.last_name + " (" + e.title + ")",
        value: e.employee_id,
      })),
    },
  ]);

  const availableRoles = await viewRoles();
  const { role_id } = await inquirer.prompt([
    {
      type: "list",
      name: "role_id",
      message: "What is the new role?",
      choices: availableRoles[0].map((r) => ({
        name: r.title,
        value: r.role_id,
      })),
    },
  ]);

  await db
    .promise()
    .query(`UPDATE employees SET role_id = ? WHERE employee_id = ?`, [
      role_id,
      employee_id,
    ]);

  return console.log(
    `Successfully updated employee's role! NOTE: Don't forget to change the employees manager if applicable!`
  );
};

module.exports = changeEmployeeRole;
