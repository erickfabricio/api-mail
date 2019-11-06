const router = require('express-promise-router')();

const {
    find,
    findById,
    save,
    update,
    remove
} = require('../controllers/applications');

router.get('/', find);
router.get('/:applicationId', findById);
router.post('/', save);
router.put('/:applicationId', update);
router.delete('/:applicationId', remove);

module.exports = router;