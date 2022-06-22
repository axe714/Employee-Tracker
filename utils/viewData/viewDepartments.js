const db = require("../../config/connection");

const viewDepartments = async () => {
  try {
    const departments = await db.promise().query(`SELECT * FROM departments`);
    return departments;
  } catch (err) {
    console.error(err);
  }
};

module.exports = viewDepartments;
