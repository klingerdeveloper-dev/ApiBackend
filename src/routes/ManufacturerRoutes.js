const express = require('express')
const router = express.Router();

const ManufacturerController = require('../controller/ManufacturerController');

router.post('/', ManufacturerController.create);
router.put('/', ManufacturerController.update);

module.exports = router;