const db = require("../../config/connection");
const inquirer = require("inquirer");
const viewRoles = require("../viewData/viewRoles");

const deleteRole = async () => {
  try {
    const roles = await viewRoles();

    const { role_id } = await inquirer.prompt([
      {
        type: "list",
        name: "role_id",
        message: "Which role would you like to delete?",
        choices: roles[0].map((r) => ({ name: r.title, value: r.role_id })),
      },
    ]);

    await db.promise().query(`DELETE FROM roles WHERE role_id = ${role_id}`);

    return console.log(`Role has been deleted!`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = deleteRole;
