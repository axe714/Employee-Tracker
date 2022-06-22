const inquirer = require("inquirer");
const db = require("../../config/connection");

const viewByManager = async () => {
  try {
    const managers = await db.promise()
      .query(`SELECT managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name
    FROM managers
    INNER JOIN departments ON managers.department_id = departments.department_id`);

    const { manager_id } = await inquirer.prompt([
      {
        type: "list",
        name: "manager_id",
        message: "Sort employees by which manager?",
        choices: managers[0].map((m) => ({
          name:
            m.manager_first_name +
            " " +
            m.manager_last_name +
            " (" +
            m.department_name +
            " Department)",
          value: m.manager_id,
        })),
      },
    ]);

    const filteredEmployees = await db.promise()
      .query(`SELECT employees.employee_id, employees.first_name, employees.last_name, employees.manager_id, roles.title FROM employees
  INNER JOIN roles ON employees.role_id = roles.role_id
  WHERE employees.manager_id = ${manager_id}`);

    return filteredEmployees;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewByManager;
