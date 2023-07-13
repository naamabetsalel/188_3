const mysql = require('mysql2');
const config = require('./DB.config');

const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    password: config.PASSWORD,
    user: config.USER
});

connection.connect(error=>{
    if (error) throw error;
    console.log("CONNECTED TO DB");
    var sql = 'CREATE TABLE IF NOT EXISTS `Students` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, name varchar(225) NOT NULL, email varchar(255) NOT NULL, username varchar(255) NOT NULL, password varchar(255) NOT NULL, bestsubject varchar(255) DEFAULT "not inserted") ENGINE=InnoDB DEFAULT CHARSET=utf8';
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    var sql2 = 'CREATE TABLE IF NOT EXISTS `Subjects` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, username2 varchar(255) NOT NULL, g1 varchar(225) NOT NULL, g2 varchar(255) NOT NULL, g3 varchar(255) NOT NULL, g4 varchar(255) NOT NULL, g5 varchar(255) NOT NULL, g6 varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table2 created");
    });
    var sql3 = 'CREATE TABLE IF NOT EXISTS `Reviews` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,review varchar(1000) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table3 created");
    });
});
    
module.exports = connection;