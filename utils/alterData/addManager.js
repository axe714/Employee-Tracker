const inquirer = require("inquirer");
const db = require("../../config/connection");
const viewManagers = require("../viewData/viewManagers");

const addManager = (callback) => {
  db.promise()
    .query(`SELECT * FROM departments`)
    .then((results) => {
      const choices = results[0].map((departments) => {
        return {
          name: departments.department_name,
          value: departments.id,
        };
      });
      // console.table(choices);
      inquirer
        .prompt([
          {
            type: "input",
            name: "manager_first_name",
            message: "What is your manager's first name?",
          },
          {
            type: "input",
            name: "manager_last_name",
            message: "What is your manager's last name?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is your manager's salary?",
          },
          {
            type: "list",
            name: "department_id",
            message: "What department does your manager preside over?",
            choices,
          },
        ])
        .then((response) => {
          setTimeout(callback, 2000);
          db.query(
            `INSERT INTO managers (manager_first_name, manager_last_name, salary, department_id) VALUES ("${response.manager_first_name}", "${response.manager_last_name}", ${response.salary}, ${response.department_id});`
          );
          console.log(
            `Sucessfully added ${response.manager_first_name} ${response.manager_last_name} as a manager with a salary of ${response.salary} to the managers table.`
          );
          //BROKEN. displayers starterQuestion prompts twice.
          // viewManagers(callback);
        });
    });
};

module.exports = addManager;
