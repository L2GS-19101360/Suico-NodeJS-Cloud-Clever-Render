const express = require('express');
const router = express.Router();
const personController = require('../controller/person.controller');

router.get('/', personController.findAll);
router.get('/:id', personController.findById);
router.post('/', personController.create);

module.exports = router;