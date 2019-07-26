const router = require('express-promise-router')();

const {
    select,
    select2,
    insert
} = require('../controllers/products');

router.get('/', select);
router.get('/:productId', select2);
router.post('/', insert);

module.exports = router;