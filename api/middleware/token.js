const jwt = require('jsonwebtoken');
const config = require('../../config');

options = {
    expiresIn: 60 * 60 * 24 //24h
};

//El payload es un json
function generateToken(payload) {
    return jwt.sign(payload, config.key, options);
}

aplication = {
    id: "app01",
    name: "Send-Mail",
    state: "A"    
}

console.log(generateToken(aplication));
