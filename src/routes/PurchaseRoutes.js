const express = require('express')
const router = express.Router();

const PurchaseController = require('../controller/PurchaseController');

router.post('/', PurchaseController.create);
router.put('/', PurchaseController.update);
router.get('/:macaddress', PurchaseController.all);

module.exports = router;