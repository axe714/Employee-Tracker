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
      // console.table(roleChoices);

      db.promise()
      // VALIDATION QUERY TO DISPLAY ONLY MANAGERS ON SELECTED ROLE --------

      // SELECT managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name, roles.role_id, roles.title
      // FROM ((managers
      // INNER JOIN departments ON managers.department_id = departments.id)
      // INNER JOIN roles ON roles.role_id = departments.id) 
      // WHERE role_id = ${response.role_id};

        .query(
          `SELECT * FROM managers INNER JOIN departments ON managers.department_id = departments.id;`
        )
        .then((results) => {
          const managerChoices = results[0].map((manager) => {
            return {
              name:
                manager.manager_first_name +
                " " +
                manager.manager_last_name +
                " (" +
                manager.department_name +
                ")",
              value: manager.manager_id,
            };
          });
          // console.table(managerChoices);

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
              if (!response.first_name || !response.last_name)
                throw new Error("Please enter a value for all fields");
              //TO DO: add employee to the employee table
              setTimeout(callback, 2000);
              db.query(
                `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
                VALUES ("${response.first_name}", "${response.last_name}", ${response.role_id}, ${response.manager_id});`
              );
              console.log(
                `You added ${response.first_name} ${response.last_name} to the employees table`
              );
            });
        });
    });
};

module.exports = addEmployee;
