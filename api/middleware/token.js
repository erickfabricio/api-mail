const jwt = require('jsonwebtoken');
const config = require('../../config');

options = {
    //expiresIn: 60 * 60 * 24 //24h
};

//El payload es un json
function generateToken(payload) {
    return jwt.sign(payload, config.key, options);
}

aplication = {
    id: "APP",
    name: "Test-Dev",
    state: "A"
}

console.log(generateToken(aplication));
