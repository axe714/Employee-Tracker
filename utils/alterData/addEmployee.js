const inquirer = require("inquirer");
const { listenerCount } = require("process");
const db = require("../../config/connection");
const viewRoles = require("../viewData/viewRoles");

const addEmployee = async () => {
  const { firstName, lastName } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
  ]);

  console.log(firstName, lastName);

  const availableRoles = await viewRoles();
  const { role_id } = await inquirer.prompt([
    {
      type: "list",
      name: "role_id",
      message: "What is this employee's role/title?",
      choices: availableRoles[0].map((r) => ({
        name: r.title,
        value: r.role_id,
      })),
    },
  ]);
  // console.log(role_id);

  //this function filters the available managers to the selected role
  const availableDepartments = async () => {
    const departments = await db.promise()
      .query(`SELECT roles.role_id, managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name
      FROM ((roles
      INNER JOIN managers on roles.department_id = managers.department_id)
      INNER JOIN departments on roles.department_id = departments.department_id)
      WHERE role_id = ${role_id}`);

    return departments;
  };

  const sortedDepartments = await availableDepartments();
  const { manager_id } = await inquirer.prompt([
    {
      type: "list",
      name: "manager_id",
      message: "Who is this employees manager?",
      choices: sortedDepartments[0].map((d) => ({
        name:
          d.manager_first_name +
          " " +
          d.manager_last_name +
          " (" +
          d.department_name +
          " Department" +
          ")",
        value: d.manager_id,
      })),
    },
  ]);
  // console.log(sortedDepartments[0])
  // console.log(manager_id)

  await db.promise()
    .query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
                  VALUES ("${firstName}", "${lastName}", ${role_id}, ${manager_id});`);

  return console.log(`Added ${firstName} ${lastName} to the employees table!`);
};

// -------------- OLD FUNCTION ---------------------

// const addEmployee = (callback) => {
//   db.promise()
//     .query(`SELECT * FROM roles`)
//     .then((results) => {
//       const roleChoices = results[0].map((role) => {
//         return {
//           name: role.title,
//           value: role.role_id,
//         };
//       });
//       // console.table(roleChoices);

//       db.promise()
//       // VALIDATION QUERY TO DISPLAY ONLY MANAGERS ON SELECTED ROLE --------

// SELECT managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name, roles.role_id, roles.title
// FROM ((managers
// INNER JOIN departments ON managers.department_id = departments.id)
// INNER JOIN roles ON roles.role_id = departments.id)
// WHERE role_id = ${response.role_id};

//         .query(
//           `SELECT * FROM managers INNER JOIN departments ON managers.department_id = departments.id;`
//         )
//         .then((results) => {
//           const managerChoices = results[0].map((manager) => {
//             return {
//               name:
//                 manager.manager_first_name +
//                 " " +
//                 manager.manager_last_name +
//                 " (" +
//                 manager.department_name +
//                 ")",
//               value: manager.manager_id,
//             };
//           });
//           // console.table(managerChoices);

//           inquirer
//             .prompt([
//               {
//                 type: "input",
//                 name: "first_name",
//                 message: "What is the employee's first name?",
//               },
//               {
//                 type: "input",
//                 name: "last_name",
//                 message: "What is the employee's last name?",
//               },
//               {
//                 type: "list",
//                 name: "role_id",
//                 message: "What is the employee's role?",
//                 //TO DO: add a function to get all roles via unique id in database
//                 choices: roleChoices,
//               },
//               {
//                 type: "list",
//                 name: "manager_id",
//                 message: "Who is this employees manager?",
//                 //TO DO: add a function to get all roles via unique id in database
//                 choices: managerChoices,
//               },
//             ])
//             .then((response) => {
//               if (!response.first_name || !response.last_name)
//                 throw new Error("Please enter a value for all fields");
//               //TO DO: add employee to the employee table
//               setTimeout(callback, 2000);
//               db.query(
//                 `INSERT INTO employees (first_name, last_name, role_id, manager_id)
//                 VALUES ("${response.first_name}", "${response.last_name}", ${response.role_id}, ${response.manager_id});`
//               );
//               console.log(
//                 `You added ${response.first_name} ${response.last_name} to the employees table`
//               );
//             });
//         });
//     });
// };

module.exports = addEmployee;
