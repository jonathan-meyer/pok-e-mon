/* eslint consistent-return:0 import/order:0 */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const mongoos = require('mongoose');
const expressSession = require('express-session');

const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const pokemonApi = require('./middlewares/pokemon');
const User = require('./model/User');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

mongoos
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoose');
    User.register(
      new User({
        username: 'jon',
      }),
      'abc123',
    )
      .then(res => console.log(res))
      .catch(ex => console.log(ex.message));
  })
  .catch(ex => console.log(ex.message));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.use(
  expressSession({
    secret: 'Hello World, this is a session',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post(
  '/foo',
  passport.authenticate('local', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.json(req.user);
  },
);

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use('/pokemon', pokemonApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
