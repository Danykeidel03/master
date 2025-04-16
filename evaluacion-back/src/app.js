const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

//Parsear de forma automatica en JSON
app.use(
  cors({
    origin: 'http://localhost:8888',
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas peticiones desde esta ip'
});

/**
 * LLAMADA RUTAS
 */

const manageUser = require('./routes/userManage')
app.use('/user', manageUser)

//toda mi api queda protegida de muchas peticiones recurrentes y excesivas
app.use('/', apiLimiter);
module.exports = app;