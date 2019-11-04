const jwt = require('jsonwebtoken');
const config = require('../../config');

//retun String
function generate(payload, seconds) {
    return jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + (seconds),
            data: payload
        },
        config.key
    );
}

function validate(token) {
    return jwt.verify(token, config.key, function (err, info) {
        if (err) {
            return { ok: false, err: err };
        }
        return { ok: true, info: info };
    });
}

module.exports = { generate, validate };

/*TEST*/
payload = { id: '1234', user: "erick" };
seconds = 2592000;

token = generate(payload, seconds);
resp = validate(token + "a");

console.log("\npayload:" + payload + "\ntoken:" + token + "\nresp:" + JSON.stringify(resp));


//console.log(validate('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzI1NDMwODYsImRhdGEiOiJlcmljayIsImlhdCI6MTU3MjU0MzAyNn0.Eh9Y9fb5UcDluHFlfi1_soYgMDOvLGlKtknG1KWiMKk'));


