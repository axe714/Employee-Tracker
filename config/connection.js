const mysql = require("mysql2");
const util = require("util")
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = db;
