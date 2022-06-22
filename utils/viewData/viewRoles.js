const db = require("../../config/connection");

const viewRoles = async () => {
  try {
    const roles = await db.promise().query(`SELECT * FROM roles`);
    return roles;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewRoles;
