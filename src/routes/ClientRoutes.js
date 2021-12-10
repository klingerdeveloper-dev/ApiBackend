const express = require('express')
const router = express.Router();

const ClientController = require('../controller/ClientController');

router.post('/', ClientController.create);
router.put('/', ClientController.update);
router.get('/:macaddress', ClientController.all);

module.exports = router;