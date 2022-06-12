const db = require("../../config/connection");

const viewEmployees = (callback) => {
  db.query(`SELECT * FROM employees`, (err, results) => {
    if (err) throw err;
    setTimeout(callback, 2000)
    return console.table(results);
  });
};

module.exports = viewEmployees;
