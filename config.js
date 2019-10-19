const config = {};

config.port = process.env.PORT || 3000;
config.db = 'mongodb://localhost/mail';

config.key = "MYKey2019"

module.exports = config;