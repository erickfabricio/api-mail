const router = require('express-promise-router')();

const {
    signUp,
    login
} = require('../controllers/session');

router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;