var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'server-database',
    user     : 'root',
    password : 'root',
    database : 'test_database',
});



module.exports = connection;
