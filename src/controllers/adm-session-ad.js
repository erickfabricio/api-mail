// Initialize

var ActiveDirectory = require('activedirectory');

var config = {
    url: 'ldap://dc.domain.com',
    baseDN: 'dc=domain,dc=com'
};

var ad = new ActiveDirectory(config);
var username = 'erick.castellanos@ficohsa.com';
var password = 'password';

// Authenticate
ad.authenticate(username, password, function(err, auth) {
    if (err) {
        console.log('ERROR: '+JSON.stringify(err));
        return;
    }
    if (auth) {
        console.log('Authenticated!');
    }
    else {
        console.log('Authentication failed!');
    }
});
