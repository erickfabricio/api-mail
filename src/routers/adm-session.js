const router = require('express-promise-router')();

const {
    signUp,
    login,
    signOut,    
    validate
} = require('../controllers/adm-session');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/signout', signOut);
router.post('/validate', validate);

module.exports = router;