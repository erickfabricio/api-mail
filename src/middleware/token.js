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

/*Generación de Token*/
payload = { info: "SEND-MAIL" };
seconds = 525600000;//365 dias // 2592000; //30 dias
token = generate(payload, seconds);
resp = validate(token);

console.log("\npayload: " + JSON.stringify(payload) +
    "\n\nseconds: " + seconds,
    "\n\ntoken: " + token +
    "\n\nresp: " + JSON.stringify(resp) + "\n");

