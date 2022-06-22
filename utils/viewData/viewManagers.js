const db = require("../../config/connection");

const viewManagers = async () => {
  try {
    const managers = await db.promise().query(`SELECT * FROM managers`);
    return managers;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewManagers;
