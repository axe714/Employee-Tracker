const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewEmployee = require("../viewData/viewEmployees");

const updateEmployeesPrompt = [
  {
    type: "list",
    name: "updateEmployeeOptions",
    message: "What would you like to do?",
    choices: [
      "Change employee role",
      "Delete employee",
      // "Return to main menu",
      "Exit",
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

      case "Delete employee":
        deleteEmployee();
        break;

      // case "Return to main menu":
      //   setTimeout(callback, 2000);
      //   break;

      case "Exit":
        console.log(`Goodbye!`);
        setTimeout(() => {
          process.exit();
        }, 2000);
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
      // console.table(choices);
      inquirer
        .prompt([
          {
            type: "list",
            name: "employee_id",
            message: "Which employee's role would you like to change?",
            choices,
          },
        ])
        .then((response) => {
          db.promise()
            .query(`SELECT * FROM roles`)
            .then((results) => {
              const roles = results[0].map((role) => {
                return {
                  name: role.title,
                  value: role.role_id,
                };
              });
              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "role_id",
                    message: "What is the new role?",
                    choices: roles,
                  },
                ])
                .then((results) => {
                  console.log(results)
                  db.promise()
                    .query(
                      `UPDATE employees SET role_id = ? WHERE employee_id = ?`,
                      [results.role_id, response.employee_id]
                    )
                    .then(() => {
                      console.log(
                        `Successfully updated employee!`
                      );
                      setTimeout(updateEmployee, 2000);
                    });
                });
            });
        });
    });
};

const deleteEmployee = () => {
  console.log("You chose delete employee..");
  setTimeout(updateEmployee, 2000);
};

module.exports = updateEmployee;
