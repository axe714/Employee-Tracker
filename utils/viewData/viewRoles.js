const db = require("../../config/connection");

const viewRoles = async () => {
  const roles = await db.promise().query(`SELECT * FROM roles`)
  return roles
};

module.exports = viewRoles;
