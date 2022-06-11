const db = require("../connection");

const viewEmployees = () => {
  db.query(`SELECT * FROM employees`, (err, results) => {
    if (err) throw err;
    console.table(results);
  });
};

module.exports = viewEmployees;
