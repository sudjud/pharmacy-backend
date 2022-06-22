const { Router } = require('express');
const router = Router();
const {drugController} = require('../controllers/drug.controller');

// Создать лекарство
router.post('/admin/drug', drugController.addDrug);
// Удалить лекарство
router.delete('/admin/drug/:id', drugController.deleteDrug);
// Изменить лекарство
router.patch('/admin/drug/:id', drugController.updateDrug);

module.exports = router;