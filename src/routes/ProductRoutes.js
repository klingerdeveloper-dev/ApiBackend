const express = require('express')
const router = express.Router();

const ProductController = require('../controller/ProductController');

router.post('/', ProductController.create);
router.put('/', ProductController.update);

module.exports = router;