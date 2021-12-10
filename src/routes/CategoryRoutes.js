const express = require('express')
const router = express.Router();

const CategoryController = require('../controller/CategoryController');

router.post('/', CategoryController.create);
router.put('/', CategoryController.update);
router.get('/', CategoryController.all);

module.exports = router;