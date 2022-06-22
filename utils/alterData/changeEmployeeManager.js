const inquirer = require("inquirer");
const db = require("../../config/connection");

const changeEmployeeManager = async () => {
  try {
    let employeeRoleTable = await db
      .promise()
      .query(
        `SELECT employees.employee_id, employees.first_name, employees.last_name, employees.role_id, roles.title FROM employees LEFT JOIN roles ON employees.role_id = roles.role_id;`
      );

    const { employee_id } = await inquirer.prompt([
      {
        type: "list",
        name: "employee_id",
        message: "Which employee would you like to update?",
        choices: employeeRoleTable[0].map((e) => ({
          name: e.first_name + " " + e.last_name + " (" + e.title + ")",
          value: e.employee_id,
        })),
      },
    ]);

    const managerDeptTable = await db
      .promise()
      .query(
        `SELECT managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name FROM managers LEFT JOIN departments ON managers.department_id = departments.department_id;`
      );
    const { manager_id } = await inquirer.prompt([
      {
        type: "list",
        name: "manager_id",
        message: "Who is this employee's new manager?",
        choices: managerDeptTable[0].map((m) => ({
          name:
            m.manager_first_name +
            " " +
            m.manager_last_name +
            " (" +
            m.department_name +
            " department" +
            ")",
          value: m.manager_id,
        })),
      },
    ]);

    await db
      .promise()
      .query(`UPDATE employees SET manager_id = ? WHERE employee_id = ?`, [
        manager_id,
        employee_id,
      ]);

    return console.log(`Successfully updated the employee's manager!`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = changeEmployeeManager;
