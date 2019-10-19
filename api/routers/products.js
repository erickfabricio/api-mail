const router = require('express-promise-router')();

const {
    find,
    findById,
    save,
    update,
    remove
} = require('../controllers/products');

router.get('/', find);
router.get('/:productId', findById);
router.post('/', save);
router.put('/:productId', update);
router.delete('/:productId', remove);

module.exports = router;