'use strict';
const Person = require('../models/person.models');

exports.update = function (req, res) {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Enter Valid Information"
        });
    } else {
        const updatedPerson = new Person(req.body);
        Person.update(req.params.id, updatedPerson, function (err, person) {
            if (err) {
                console.error("Error updating person:", err); // Log the error for debugging purposes
                res.status(500).send({
                    error: true,
                    message: "Failed to update person. " + err.message // Send the error message back to the client
                });
            } else {
                res.status(200).send({
                    error: false,
                    message: "Person Updated!",
                    data: person
                });
            }
        });
    }
};

exports.delete = function (req, res) {
    Person.delete(req.params.id, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.send({ status: 200, error: false, message: "Person Deleted!" });
    });
};

exports.create = function (req, res) {
    const new_person = new Person(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "Enter Valid Information"
        });
    } else {
        Person.create(new_person, function (err, person) {
            if (err) {
                res.send(err);
            }
            res.send({ status: 200, data: person, message: "Person Created!" });
        });
    }
};

exports.findById = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.send({ status: 200, data: person });
    });
};

exports.findAll = function (req, res) {
    Person.findAll(function (err, person) {
        if (err) {
            res.send(err);
        }
        console.log('res', person);
        res.send({ status: 200, data: person });
    });
};