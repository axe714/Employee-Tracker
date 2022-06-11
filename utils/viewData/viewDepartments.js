const db = require("../connection");

const viewDepartments = () => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    if (err) throw err;
    console.table(results);
  });
};

module.exports = viewDepartments;
