const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const Reg = require('../views/Reg');
const { User } = require('../db/models');

authRouter.get('/login', (req, res) => {
  res.renderComponent(Login, {
    title: 'Login form',
  });
});

authRouter.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user.id;
      res
        .status(200)
        .json({ login: true, url: '/', message: 'Вход прошел успешно' });
    } else {
      res.status(404).json({ login: false, message: 'Пользователь не найден' });
    }
  } catch (error) {
    res.status(500).json({ login: false, message: 'Ошибка при входе' });
  }
});

authRouter.get('/reg', (req, res) => {
  res.renderComponent(Reg, {
    title: 'Registration form',
  });
});

authRouter.post('/reg', async (req, res) => {
  try {
    const { login, userName, password } = req.body;
    if (login && userName && password) {
      const userInDb = await User.findOne({ where: { login } });
      if (!userInDb) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          login,
          userName,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        req.session.userId = newUser.id;
        res
          .status(201)
          .json({ reg: true, url: '/', message: 'Регистрация прошла успешно' });
      } else {
        res
          .status(403)
          .json({ reg: false, message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(404).json({ reg: false, message: 'Поля формы не заполнены' });
    }
  } catch (error) {
    res.status(500).json({ reg: false, message: 'Ошибка при регистрации' });
  }
});

module.exports = authRouter;
