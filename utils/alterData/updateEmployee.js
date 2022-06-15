const inquirer = require("inquirer");
const db = require("../../config/connection");

const updateEmployeesPrompt = [
  {
    type: "list",
    name: "updateEmployeeOptions",
    message: "What would you like to do?",
    choices: [
      "Change employee role",
      "Change employee salary",
      "Delete employee",
      "Go back to main menu",
    ],
  },
];

// const changeRolePrompt = [
//   {
//     type: "list",
//     name: "employee_id",
//     message: "Which employee's role would you like to change?",
//     choices
//   },
// ];

const updateEmployee = (callback) => {
  inquirer.prompt(updateEmployeesPrompt).then((response) => {
    switch (response.updateEmployeeOptions) {
      case "Change employee role":
        changeEmployeeRole();
        break;
      case "Change employee salary":
        changeEmployeeSalary();
        break;
      case "Delete employee":
        deleteEmployee();
        break;
      case "Go back to main menu":
        setTimeout(callback, 2000);
        console.log("Going back to main menu....");
        break;
    }
  });
};

const changeEmployeeRole = () => {
  db.promise()
    .query(`SELECT * FROM employees`)
    .then((results) => {
      const choices = results[0].map((employee) => {
        return {
          name: employee.first_name + " " + employee.last_name,
          value: employee.employee_id,
        };
      });
      console.log(choices);
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee_id",
            message: "Which employee's role would you like to change?",
            choices,
          },
        ])
        .then((response) => {});
    });
  setTimeout(updateEmployee, 2000);
};

const changeEmployeeSalary = () => {
  console.log("You chose change employee salary..");
  setTimeout(updateEmployee, 2000);
};

const deleteEmployee = () => {
  console.log("You chose delete employee..");
  setTimeout(updateEmployee, 2000);
};

module.exports = updateEmployee;
