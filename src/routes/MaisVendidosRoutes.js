const express = require('express')
const router = express.Router();

const MaisVendidosController = require('../controller/MaisVendidosController');

router.post('/', MaisVendidosController.create);
router.put('/', MaisVendidosController.update);
/* Consultas */
router.get('/', MaisVendidosController.all);

module.exports = router;