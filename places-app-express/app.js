const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const session      = require('express-session');
const passport     = require('passport');

require("dotenv").config();

require("./config/mongoose-setup");
require("./config/passport-setup");

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    // accepts cookies across domains
    credentials: true,
    // ONLY allow these domains
    origin: [ 'http://localhost:4200' ]
  })
);
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'this should be in the .env file'
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTERS ---------------------------------------------------------------------
const placeApi = require("./routes/place-api-router");
app.use("/api", placeApi);

const userApi = require("./routes/user-api-router");
app.use("/api", userApi);

// END OF ROUTERS --------------------------------------------------------------

module.exports = app;
