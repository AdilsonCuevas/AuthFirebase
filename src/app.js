const express = require('express');
const morgan = require('morgan');   //se conoce como miderwar esta en medio de las peticiones del servidor
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
// setting
app.set('port', process.env.PORT || 4000);
app. set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middleware
app.use(morgan('dev'));  // modo desarrollo
app.use(express.urlencoded({extended: false}));  // aceptar los formularios que se reciben en formato jeison ****** 

//routes
app.use(require('./routes/index'));

// static files   ***para datos publicos
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;