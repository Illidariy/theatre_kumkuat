require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./config/session');
// const auth = require('./middleware/auth');

const actorsRouter = require('./routes/actors.routes');
const spectaclesRouter = require('./routes/spectacles.routes');
const authRouter = require('./routes/auth.routes');
const directorsRouter = require('./routes/directors.routes');
const productsRouter = require('./routes/products.routes');
// const indexRouter = require('./routes/index.routes');
// const usersRouter = require('./routes/users.routes');
// const studentsRouter = require('./routes/students.routes');

const app = express();

const PORT = process.env.PORT || 5000;

// const corsOptions = {
//   origin: ['http://localhost:3000'],
//   credentials: true,
// };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(auth);
// app.use(cors(corsOptions));

app.use('/actors', actorsRouter);
app.use('/spectacles', spectaclesRouter);
app.use('/auth', authRouter);
app.use('/directors', directorsRouter);
app.use('/products', productsRouter);

app
  .listen(PORT)
  .on('error', (error) => {
    console.log('Ошибка подключения: ', error.message);
  })
  .on('listening', () => {
    console.log(`Сервер успешно запущен на ${PORT} порту`);
  });
