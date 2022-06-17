const db = require("../../config/connection");

const viewManagers = async () => {
  const managers = await db.promise().query(`SELECT * FROM managers`)
  return managers
};

module.exports = viewManagers;
