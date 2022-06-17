const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewRoles = require("../viewData/viewRoles");

const updateEmployeesPrompt = [
  {
    type: "list",
    name: "updateEmployeeOptions",
    message: "What would you like to do?",
    choices: [
      "Change employee role",
      "Update an employee's manager",
      "Delete an employee",
      "Return to main menu",
      "Exit",
    ],
  },
];

const updateEmployee = async () => {
  const { updateEmployeeOptions } = await inquirer.prompt(
    updateEmployeesPrompt
  );
  switch (updateEmployeeOptions) {
    case "Change employee role":
      const changedEmployeeRole = await changeEmployeeRole();
      return;

    case "Update an employee's manager":
      const updatedManager = await updateManager();
      return;

    case "Delete an employee":
      const deletedEmployee = await deleteEmployee();
      return;

    case "Return to main menu":
      return console.log(`Returning to main menu....`);

    case "Exit":
      console.log(`Goodbye!`);
      setTimeout(() => {
        process.exit();
      }, 2000);
  }
};

const changeEmployeeRole = async () => {
  let employeeRoleTable = await db.promise().query(
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


const updateManager = async () => {
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
};


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
      choices: employeeRoleTable[0].map(e=>({name:
        e.first_name +
        " " +
        e.last_name +
        " (" +
        e.title +
        ")",
      value: e.employee_id,}))
    },
  ]);

  await db
    .promise()
    .query(`DELETE FROM employees WHERE employee_id = ${employee_id}`);
  return console.log(`Successfully deleted employee!`);

};

// .then((results) => {
//   const choices = results[0].map((employee) => {
//     return {
      // name:
      //   employee.first_name +
      //   " " +
      //   employee.last_name +
      //   " (" +
      //   employee.title +
      //   ")",
      // value: employee.employee_id,
//     };
//   });
// console.table(choices);

module.exports = updateEmployee;
