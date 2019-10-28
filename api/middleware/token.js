const jwt = require('jsonwebtoken');
const config = require('../../config');

function generateToken(payload) {
    return jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: payload
        },
        config.key
    );
}

function validateToken(token) {
    try {
        let rest = jwt.verify(token, config.key);
        return rest;
    } catch (err) {
        // err
        return err;
    }

    /*
    jwt.verify(token, config.key, function (err, rest, next) {
        if (err) {
            return false;
        }
        return true;
    });*/
}

module.exports = { generateToken, validateToken };
/*TEST*/
payload = "erick";
token = generateToken(payload);
rest = validateToken(token + "a");
console.log("payload:" + payload + "\ntoken:" + token + "\nrest:" + rest);



