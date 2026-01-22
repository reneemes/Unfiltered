const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.promise().query(
  'SELECT * FROM users;'
).then(([rows, fields]) => {
  console.log(rows);
  console.log('connect accepted');
});

module.exports = connection;