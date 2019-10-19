const router = require('express-promise-router')();

const {
    find,
    findById,
    save,
    update,
    remove
} = require('../controllers/notifications');

router.get('/', find);
router.get('/:notificationId', findById);
router.post('/', save);
router.put('/:notificationId', update);
router.delete('/:notificationId', remove);

module.exports = router;