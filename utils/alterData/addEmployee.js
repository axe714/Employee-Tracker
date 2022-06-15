const inquirer = require("inquirer");
const db = require("../../config/connection");

const addEmployee = (callback) => {
  db.promise()
    .query(`SELECT * FROM roles`)
    .then((results) => {
      const roleChoices = results[0].map((role) => {
        return {
          name: role.title,
          value: role.role_id,
        };
      });
      console.table(roleChoices);

      //STILL INCOMPLETE. NEED TO JOIN THE ROLE TABLE WITH THE MANAGER TABLE.
      db.promise()
        .query(`SELECT * FROM managers`)
        .then((results) => {
          const managerChoices = results[0].map((manager) => {
            return {
              name: manager.manager_first_name + " " + manager.manager_last_name,
              value: manager.manager_id,
            };
          });
          console.table(managerChoices);
          
          inquirer
            .prompt([
              {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?",
              },
              {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?",
              },
              {
                type: "list",
                name: "role_id",
                message: "What is the employee's role?",
                //TO DO: add a function to get all roles via unique id in database
                choices: roleChoices,
              },
              {
                type: "list",
                name: "manager_id",
                message: "Who is this employees manager?",
                //TO DO: add a function to get all roles via unique id in database
                choices: managerChoices,
              },
            ])
            .then((response) => {
              //TO DO: add employee to the employee table
              setTimeout(callback, 2000);
              console.log(
                `You added ${response.first_name} ${response.last_name} as a ${response.role_id} to the employee table`
              );
            });
        });
    });
};

module.exports = addEmployee;
