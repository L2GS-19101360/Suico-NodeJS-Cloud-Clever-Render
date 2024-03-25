'use strict';
const Person = require('../models/person.models');

exports.findById = function(req, res){
    Person.findById(req.params.id, function(err, person){
        if (err){
            res.send(err);
        }
        res.send({ status: 200, data: person });
    });
}

exports.findAll = function(req, res){
    Person.findAll(function(err, person){
        if (err){
            res.send(err);
        }
        console.log('res', person);
        res.send({ status: 200, data: person });
    });
};