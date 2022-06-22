const { Router } = require('express');
const router = Router();
const {clientController} = require('../controllers/client.controller');

// Добавить пользователя
router.post('/client', clientController.addClient)

// Добавить лекарство в корзину
router.patch('/client/:id/add-to-cart/:drugid', clientController.addToCart);

 // Удалить лекарство из корзины
router.patch('/client/:id/remove-from-cart/:drugid', clientController.removeFromCart);

// Очистить корзину
router.patch('/client/:id/cart/clean', clientController.cleanCart);

// Купить товар из корзины
router.patch('/client/:id/cart/buy', clientController.buyCart);

// Пополнить кошелек
router.patch('/client/:id/cart/top-up', clientController.topUpMoney); 

module.exports = router;
