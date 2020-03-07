/**
 * Autor...: Erick Fabricio Martínez Castellanos
 * Web.....: https://erickfabricio.com
 * Email...: mail@erickfabricio.com
 * GitHub..: https://github.com/erickfabricio
 */

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('../config');

//Server
const https = require('https');
const app = express();

//Start server
const server = https.createServer({
    key: fs.readFileSync(config.keytmp),
    cert: fs.readFileSync(config.cert),
    passphrase: config.passphrase
}, app);

/*
const server = https.createServer({
    key: fs.readFileSync(config.privkey),
    cert: fs.readFileSync(config.fullchain)
}, app);*/

server.listen(config.portHttps, () => {
    console.log("Server web on port:", config.portHttps);
});

//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    useNewUrlParser: true
}).then(db => console.log('Server db is connected'))
    .catch(err => console.log(err));


//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

//Routers
app.use('/api/session', validateToken, require('./routers/adm-session'));

app.use('/api/modules', validateToken, require('./routers/adm-modules'));
app.use('/api/collections', validateToken, require('./routers/adm-collections'));
app.use('/api/roles', validateToken, require('./routers/adm-roles'));
app.use('/api/users', validateToken, require('./routers/adm-users'));
app.use('/api/apps', validateToken, require('./routers/adm-apps'));
app.use('/api/tokens', validateToken, require('./routers/adm-tokens'));
app.use('/api/logs', validateToken, require('./routers/adm-logs'));
app.use('/api/data', validateToken, require('./routers/adm-data'));
app.use('/api/catalogs', validateToken, require('./routers/adm-catalogs'));

app.use('/api/products', validateToken, require('./routers/app-products'));
app.use('/api/notifications', validateToken, require('./routers/app-notifications'));

//******** Util ********//

//Validations
function validateToken(req, res, next) {

    var token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ ok: false, message: 'Authentication failed' });
    }

    token = token.replace('Bearer ', '');

    jwt.verify(token, config.key, function (err, info) {
        if (err) {
            return res.status(401).send({ ok: false, message: 'Token invalid, ' + err.name + ' ' + err.message + '.' });
        } else {
            console.log("validateToken -> info:" + JSON.stringify(info));
            //res.status(200).json({ ok: true, menssage: "Correct token", info: info });
            //req.token = info
            next();
        }
    });
}