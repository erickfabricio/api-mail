const router = require('express-promise-router')();

const {
    index,
    newProduct
} = require('../controllers/products');

router.get('/', index);
router.post('/', newProduct);

module.exports = router;