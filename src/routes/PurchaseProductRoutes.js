const express = require('express')
const router = express.Router();

const PurchaseProductController = require('../controller/PurchaseProductController');

router.post('/', PurchaseProductController.create);
router.put('/', PurchaseProductController.update);

module.exports = router;