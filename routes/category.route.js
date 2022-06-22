const { Router } = require('express');
const router = Router();
const {categoryController} = require('../controllers/category.controller');

// Создать категорию
router.post('/category', categoryController.addCategory);

// Выдать категорию
router.get('/category/:id', categoryController.getCategory);

// Выдать категории
router.get('/category', categoryController.getCategories);

// Обновить категории
router.patch('/admin/category/:id', categoryController.updateCategory);

// Удалить категорию
router.delete('/admin/category/:id', categoryController.deleteCategory);

module.exports = router