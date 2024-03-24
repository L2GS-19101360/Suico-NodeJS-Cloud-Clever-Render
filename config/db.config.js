'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: "bjleuokfofw7ohcy0d3y-mysql.services.clever-cloud.com",
    user: "uoyjpsdiokll0ftu",
    password: "z33xxLzpgmXQXtTLngkZ",
    database: "bjleuokfofw7ohcy0d3y"
});

dbConn.connect(function(err){
    // if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
