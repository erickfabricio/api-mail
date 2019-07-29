const router = require('express-promise-router')();

const {
    find,
    save,
    update,
    remove
} = require('../controllers/products');

router.get('/', find);
router.post('/', save);
router.put('/:productId', update);
router.delete('/:productId', remove);

module.exports = router;