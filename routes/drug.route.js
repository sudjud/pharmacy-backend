const { Router } = require('express');
const router = Router();
const { drugController } = require('../controllers/drug.controller')

// Выдать лекарство
router.get('/drugs/:id', drugController.getDrug);

// Выдать лекарства - admin and client
router.get('/drugs', drugController.getDrugs);

// Выдать лекартства по категории
router.get('/drugs/category/:id', drugController.getDrungByCategory);

module.exports = router;