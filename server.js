var createError= require('./node_modules/http-errors');
const express = require('./node_modules/express');
const path = require('path');
var cookieParser = require('./node_modules/cookie-parser');
var logger = require('./node_modules/morgan');
var session = require('./node_modules/express-session');
var passport = require('./node_modules/passport/lib');
var OidcStrategy = require('./node_modules/passport-openidconnect').Strategy;

const app = express();
const router= express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'MyVoiceIsMyPassportVerifyMe',
	resave: false,
	saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

// set up passport
passport.use('oidc', new OidcStrategy({
	issuer: 'https://colorado-us.okta.com/oauth2/default',
	authorizationURL: 'https://colorado-us.okta.com/oauth2/default/v1/authorize',
	tokenURL: 'https://colorado-us.okta.com/oauth2/default/v1/token',
	userInfoURL: 'https://colorado-us.okta.com/oauth2/default/v1/userinfo',
	clientID: '0oaa98t6s9Kn6G3Sh4x6',
	clientSecret: 'cjNvCvVtfT6L33TL9cHnneuVp3IyzynCc1YuhVCQ',
	callbackURL: 'http://localhost:3000/authorization-code/callback',
	scope: 'openid profile'
  }, (issuer, sub, profile, accessToken, refreshToken, done) => {
	return done(null, profile);
  })); 
  
  passport.serializeUser((user, next) => {
	next(null, user);
  });
  
  passport.deserializeUser((obj, next) => {
	next(null, obj);
  });


  app.use('/login', passport.authenticate('oidc'));

app.use('/authorization-code/callback',
  passport.authenticate('oidc', { failureRedirect: '/error' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.use('/profile', (req, res) => {
	res.render('profile', { title: 'Express', user: req.user });
  });

  function ensureLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
	  return next();
	}
  
	res.redirect('/login')
  }

  app.use('/profile', ensureLoggedIn, (req, res) => {
	res.render('profile', { title: 'Express', user: req.user });
  });

  app.get('/logout', (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/');
  });

app.use('/',router);
app.listen(process.env.port || 3000);
console.log("Server is now running....");
console.log("Port is 3000");
//OLD server protocol

// const app = express();
// const router= express.Router();

// //Resource: https://stackoverflow.com/questions/5924072/express-js-cant-get-my-static-files-why
// app.use('*/css',express.static(path.join(__dirname, 'resources/css')));
// app.use('*/fonts',express.static(path.join(__dirname, 'resources/fonts')));
// app.use('*/js',express.static(path.join(__dirname, 'resources/js')));

// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/'));

// router.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, 'views/pages/home.html'));
// })

// //Unclear if I need all these right now. The html files seem to be connected and loading in properly now
// /*
// app.get('/home', function(req, res){
//   res.sendFile(path.join(__dirname, '/home.html'));
// })
// */
// router.get('/candidate_info', function(req, res){
// 	res.sendFile(path.join(__dirname, 'Project/OurProject-Republic/views/pages/candidate_info.html'));
// });

// router.get('/polls', function(req, res){
// 	res.sendFile(path.join(__dirname, 'Project/OurProject-Republic/views/pages/polls.html'));
// });

// router.get('/events', function(req, res){
// 	res.sendFile(path.join(__dirname, 'Project/OurProject-Republic/views/pages/events.html'));
// });

// router.get('/login', function(req, res){
// 	res.sendFile(path.join(__dirname, 'Project/OurProject-Republic/views/pages/login.php'));
// });

// app.use('/',router);
// app.listen(process.env.port || 3000);
// console.log("Server is now running....");
// console.log("Port is 3000");
