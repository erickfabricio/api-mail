const bcrypt = require('bcrypt');
const saltRounds = 10;

function generateHash(password) {
    return bcrypt.hashSync(password, saltRounds);
}

function validateHash(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = { generateHash, validateHash };
/* TEST 
password = "abc123";
hash = generateHash(password);
rest = validateHash(password, hash);
console.log("password:" + password + "\nhash:" + hash + "\nrest:" + rest);
*/