const db = require("../connection");

const viewRoles = (callback) => {
  db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) throw err;
    console.table(results);
    setTimeout(callback, 2000)
  });
};

module.exports = viewRoles;
