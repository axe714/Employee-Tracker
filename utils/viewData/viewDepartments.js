const db = require("../../config/connection");

const viewDepartments = async () => {
  const departments = await db.promise().query(`SELECT * FROM departments`);
  return departments;
};

module.exports = viewDepartments;
