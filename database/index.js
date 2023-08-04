const mysql = require('mysql2')
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME
});

module.exports = mysqlPool.promise()



