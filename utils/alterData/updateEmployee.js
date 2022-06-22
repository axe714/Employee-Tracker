const inquirer = require("inquirer");
const db = require("../../config/connection");
const changeEmployeeRole = require("./changeEmployeeRole");
const changeEmployeeManager = require("./changeEmployeeManager");
const deleteEmployee = require("./deleteEmployee");

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
  try {
    const { updateEmployeeOptions } = await inquirer.prompt(
      updateEmployeesPrompt
    );
    switch (updateEmployeeOptions) {
      case "Change employee role":
        const changedEmployeeRole = await changeEmployeeRole();
        return;

      case "Update an employee's manager":
        const updatedManager = await changeEmployeeManager();
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
  } catch (err) {
    console.error(err);
  }
};

module.exports = updateEmployee;
