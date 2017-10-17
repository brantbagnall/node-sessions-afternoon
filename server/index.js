const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    checkForSession = require('./middlewares/checkForSession'),
    swagCtrl = require('./controllers/swag_controller'),
    cartCtrl = require('./controllers/cart_controller'),
    searchCtrl = require('./controllers/search_controller'),
    auth = require('./controllers/auth_controller');
    app = express(),
    port = 3000;

app.use(bodyParser.json());
app.use(session({
    secret: 'kjdfssdfhkashdfjshdf',
    resave: false,
    saveUninitialized: false
}));
app.use(checkForSession);

app.use( express.static( `${__dirname}/../public/build` ) );

app.get('/api/swag', swagCtrl.read);

app.post('/api/login', auth.login);
 
app.post('/api/register', auth.register);
 
app.post('/api/signout', auth.signout);

app.get('/api/user', auth.getUser);

app.post('/api/cart', cartCtrl.add);

app.post('/api/cart/checkout', cartCtrl.checkout);

app.delete('/api/cart', cartCtrl.delete);

app.get('/api/search', searchCtrl)
 
app.listen(port, ()=> console.log('listening on port: ' + port));