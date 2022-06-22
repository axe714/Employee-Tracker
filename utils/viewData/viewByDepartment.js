const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewDepartments = require("./viewDepartments");

const viewByDepartment = async () => {
  try {
    const departments = await viewDepartments();

    const { department_id } = await inquirer.prompt([
      {
        type: "list",
        name: "department_id",
        message: "Which department would you like to view employees by?",
        choices: departments[0].map((d) => ({
          name: d.department_name,
          value: d.department_id,
        })),
      },
    ]);

    const filteredEmployees = await db.promise()
      .query(`SELECT departments.department_name, employees.first_name, employees.last_name, roles.department_id, employees.role_id, roles.title
    FROM ((employees
    INNER JOIN roles ON employees.role_id = roles.role_id)
    INNER JOIN departments ON roles.department_id = departments.department_id) 
    WHERE departments.department_id = ${department_id}`);

    return filteredEmployees;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewByDepartment;
