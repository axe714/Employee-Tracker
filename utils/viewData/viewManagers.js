const db = require("../connection");

const viewManagers = () => {
  db.query(`SELECT * FROM managers`, (err, results) => {
    if (err) throw err;
    console.table(results);
  });
};

module.exports = viewManagers;
