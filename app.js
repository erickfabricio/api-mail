/**
 * Despliegue del servidor web con la conexión mongodb.
 */

const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');


const app = express();

//mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mail', {
    useNewUrlParser: true
}).then(db => console.log('server db is connected'))
  .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

//routers
//app.use('/applications', require('./routers/applications'));
app.use('/api/products', require('./routers/products'));
app.use('/api/notifications', require('./routers/notifications'));

//static file

//error handlers

//start server
app.listen(app.get('port'), () => {
    console.log("server web on port:", app.get('port'));
});