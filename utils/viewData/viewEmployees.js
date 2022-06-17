const db = require("../../config/connection");

const viewEmployees = async () => {
  const employees = await db.promise().query(`SELECT * FROM employees`);
  return employees;
};

module.exports = viewEmployees;
