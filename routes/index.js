const { Router } = require('express');
const router = Router();

router.use(require('./admin.route'));
router.use(require('./category.route'));
router.use(require('./drug.route'));
router.use(require('./client.route'));

module.exports = router;

