const db = require("../../config/connection");

const viewEmployees = async () => {
  try {
    const employees = await db.promise()
      .query(`SELECT employees.employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name
  FROM (((employees
  INNER JOIN roles on employees.role_id = roles.role_id)
  INNER JOIN managers on employees.manager_id = managers.manager_id)
  INNER JOIN departments on roles.department_id = departments.department_id);`);
    return employees;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewEmployees;
