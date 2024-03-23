const express = require('express');
const router = express.Router();
const personController = require('../controller/person.controller');

router.get('/', personController.findAll);

module.exports = router;