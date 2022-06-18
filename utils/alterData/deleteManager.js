const db = require("../../config/connection");
const inquirer = require("inquirer");

const deleteManager = async () => {
  const managers = await db.promise()
    .query(`SELECT managers.manager_id, managers.manager_first_name, managers.manager_last_name, departments.department_name
    FROM managers
    INNER JOIN departments ON managers.department_id = departments.department_id`);

  const { manager_id } = await inquirer.prompt([
    {
      type: "list",
      name: "manager_id",
      message: "Which manager would you like to delete?",
      choices: managers[0].map((m) => ({
        name:
          m.manager_first_name +
          " " +
          m.manager_last_name +
          " (" +
          m.department_name +
          " Department)",
        value: m.manager_id,
      })),
    },
  ]);

  await db
    .promise()
    .query(`DELETE FROM managers WHERE manager_id = ${manager_id}`);

  return console.log(`Manager has been deleted!`);
};

module.exports = deleteManager;
