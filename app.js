/**
 * Despliegue del servidor web con la conexión mongodb.
 */

const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db_mail', {
    useNewUrlParser: true
}).then(db => console.log('server db is connected'))
  .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routers
//app.use('/applications', require('./routers/applications'));
app.use('/api/products', require('./routers/products'));
//app.use('/notifications', require('./routers/notifications'));

//static file

//error handlers

//start server
app.listen(app.get('port'), () => {
    console.log("server web on port:", app.get('port'));
});