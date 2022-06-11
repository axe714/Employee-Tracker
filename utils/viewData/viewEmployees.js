const db = require("../connection");

const viewEmployees = (callback) => {
  db.query(`SELECT * FROM employees`, (err, results) => {
    if (err) throw err;
    console.table(results);
    setTimeout(callback, 2000)
  });
};

module.exports = viewEmployees;
