const User = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function encript() {
    var username = "mail@erickfabricio.com";
    var password = "abc123"; //$2b$10$9HjmsmmvLTv2E49q2UH7neLxyeSCFhiQAV2ijDDrQfX./BOM7e1g2

    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            console.log(err);
        }
        console.log(hash);
    });
}

function dencript() {
    var password = "abc123";
    var hash = "$2b$10$9HjmsmmvLTv2E49q2UH7neLxyeSCFhiQAV2ijDDrQfX./BOM7e1g2";

    bcrypt.compare(password, hash, function (err, result) {
        if (result) {
            console.log("Bien");
        } else {
            console.log("Mail");
        }
    })
}

async function validateUser(mail, password) {
    query = {mail: "erickfabriciomartinez@gmail.com"};
    parms = "name";
    const user = await User.find(query, parms);
    console.log(User.find());
    console.log(user);
}

//encript();
dencript();
//validateUser("erickfabriciomartinez@gmail.com", 'a');