const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const Reg = require('../views/Reg');
const { User } = require('../db/models');

authRouter.get('/', (req, res) => {
  res.renderComponent(Login, {
    title: 'Login form',
  });
});

authRouter.get('/reg', (req, res) => {
  res.renderComponent(Reg, {
    title: 'Registration form',
  });
});

authRouter.post('/reg', async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login && password) {
      const user = await User.findOne({ where: { login } });
      if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          login,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        req.session.userId = newUser.id;
        res.json({ message: 'Регистрация прошла успешно' });
      }
    } else {
      res.json({ message: 'Такой пользователь уже существует' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при регистрации' });
  }
});

module.exports = authRouter;
