const jwt = require('jsonwebtoken');
const config = require('../../config');
const User = require('../models/users');

const bcrypt = require('bcrypt');
const saltRounds = 10;

async function generate(req, res, next) {
    console.log(req.body);
    //Search user        
    const user = await User.findOne({ mail: req.body.mail });
    if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result) {
                //Generate token
                let token = jwt.sign(
                    {
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
                        data: user.mail
                    },
                    config.key
                );
                //console.log(token);
                res.status(200).json({ ok: true, menssage: "Correct login", token: token, user: user });
            } else {
                res.status(200).json({ ok: false, menssage: "Incorrect password" });
            }
        })
    } else {
        res.status(200).json({ ok: false, menssage: "Email not registered" });
    }
}

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

module.exports = { generate, validate };
/*TEST
payload = "erick";
token = generateToken(payload);
rest = '' //validateToken(token);
console.log("payload:" + payload + "\ntoken:" + token + "\nrest:" + rest);
*/


