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
app.use('/api/users', validateToken, require('./api/routers/users'));
app.use('/api/products', validateToken, require('./api/routers/products'));
app.use('/api/notifications', validateToken, require('./api/routers/notifications'));

//Start server
app.listen(config.port, () => {
    console.log("server web on port:", config.port);
});

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