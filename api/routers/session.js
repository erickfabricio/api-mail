const router = require('express-promise-router')();

const {
    signUp,
    login,
    validate
} = require('../controllers/session');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/validate', validate);

module.exports = router;