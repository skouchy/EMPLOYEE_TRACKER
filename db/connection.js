const mysql = require('mysql2');

// Connect to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '%tb4d=-D',
        database: 'employees_db'
    },
    console.log('connected to the employees_db database!')
);

module.exports = db;