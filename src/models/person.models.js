'use strict';
const dbConn = require('../../config/db.config');

const Person = function(person){
    this.firstname = person.firstname;
    this.lastname = person.lastname;
    this.registered = new Date();
    this.updated = null
}

Person.findById = function(id, result){
    dbConn.query("SELECT * FROM Person WHERE id = ?", id, function(err, res){
        if (err){
            console.log("Error: ", err);
            result(err, null);
        } else{
            result(null, res);
        }
    });
}

Person.findAll = function(result) {
    dbConn.query("SELECT * FROM Person", function(err, res){
        if (err){
            console.log("Error: ", err);
            result(null, err);
        } else{
            console.log('Persons: ', res);
            result(null, res);
        }
    });
}

module.exports = Person;
