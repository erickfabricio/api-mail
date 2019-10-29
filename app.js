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
const config = require('./config');
const token = require('./api/middleware/token');

//Server
const app = express();

//MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
    useNewUrlParser: true
}).then(db => console.log('server db is connected'))
  .catch(err => console.log(err));

//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

//Routers
app.use('/api/session', require('./api/routers/session'));
app.use('/api/users', token.validate, require('./api/routers/users'));
app.use('/api/products', token.validate, require('./api/routers/products'));
app.use('/api/notifications', token.validate, require('./api/routers/notifications'));

//Start server
app.listen(config.port, () => {
    console.log("server web on port:", config.port);
});