let express = require('express');
let path = require('path');

let cookieParser = require('cookie-parser');
let logger = require('morgan');

let index = require('./routes/index');
let gallery = require('./routes/gallery');
let exhibitions = require('./routes/exhibitions');
let contact = require('./routes/contact');
let imprint = require('./routes/imprint');
let notknown = require('./routes/404');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/gallery', gallery);
app.use('/exhibitions', exhibitions);
app.use('/contact', contact);
app.use('/imprint', imprint);
app.use('/404', notknown);

app.use(function (req, res) {
    res.redirect('/404');
});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
