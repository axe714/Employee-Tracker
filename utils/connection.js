const mysql = require("mysql2");
// require("dotenv").config();

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: process.env.DB_PORT || 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

const db = mysql.createConnection({
    host: "localhost",
    port: process.env.DB_PORT || 3306,
    user: "root",
    password: "root",
    database: "company_db",
  });

module.exports = db;
