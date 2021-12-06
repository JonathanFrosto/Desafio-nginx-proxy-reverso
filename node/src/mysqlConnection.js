const config = {
    "host": "db",
    "user": "root",
    "password": "12345678",
    "database": "nodedb"
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

module.exports = connection;

