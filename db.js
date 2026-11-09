const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "testid",
  password: "testid",
  database: "todo",
  connectionLimit: 5,
});

module.exports = pool;
