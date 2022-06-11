const db = require("../connection");

const viewRoles = () => {
  db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) throw err;
    console.table(results);
  });
};

module.exports = viewRoles;
