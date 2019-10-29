const jwt = require('jsonwebtoken');
const config = require('../../config');
const User = require('../models/users');

function validate(req, res, next) {

    var token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ ok: false, message: 'Authentication failed' });
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, config.key, function (err, data) {
        if (err) {
            return res.status(401).send({ ok: false, message: 'Token invalid' });
        } else {
            console.log(data);
            //req.token = data
            next();
        }
    });
}

module.exports = { validate };
/*TEST
payload = "erick";
token = generateToken(payload);
rest = '' //validateToken(token);
console.log("payload:" + payload + "\ntoken:" + token + "\nrest:" + rest);
*/


