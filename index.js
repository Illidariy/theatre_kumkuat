require('@babel/register');
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const ssr = require('./middleware/ssr');

const indexRouter = require('./routes/index.routes');
const actorsRouter = require('./routes/actors.routes');
const spectaclesRouter = require('./routes/spectacles.routes');
const authRouter = require('./routes/auth.routes');
const directorsRouter = require('./routes/directors.routes');
const studentsRouter = require('./routes/students.routes');

const app = express();

const PORT = process.env.PORT || 3000;

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(ssr);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);

app
  .listen(PORT)
  .on('error', (error) => {
    console.log('Ошибка подключения: ', error.message);
  })
  .on('listening', () => {
    console.log(`Сервер успешно запущен на ${PORT} порту`);
  });
