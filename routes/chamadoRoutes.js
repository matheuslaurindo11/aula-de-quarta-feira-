const express = require('express');
const chamadosController = require('../controllers/chamadoController');

const router = express.Router();

router.post('/', chamadosController.criar);

module.exports = router;
