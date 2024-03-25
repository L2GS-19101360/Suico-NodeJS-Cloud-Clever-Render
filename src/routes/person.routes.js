const express = require('express');
const router = express.Router();
const personController = require('../controller/person.controller');

router.get('/', personController.findAll);
router.get('/:id', personController.findById);
router.post('/', personController.create);
router.delete('/:id', personController.delete);
router.put('/:id', personController.update);

module.exports = router;