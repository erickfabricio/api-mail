const router = require('express-promise-router')();

const {
    find,
    findById,
    save,
    update,
    remove,
    login
} = require('../controllers/users');

router.get('/', find);
router.get('/:userId', findById);
router.post('/', save);
router.put('/:userId', update);
router.delete('/:userId', remove);

router.post('/login', login);

module.exports = router;