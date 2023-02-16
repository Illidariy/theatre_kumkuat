const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ login: false, message: 'Пользователь не найден' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res
        .status(404)
        .json({ login: false, message: 'Email или пароль не верный' });
      return;
    }
    req.session.userId = user.id;
    res
      .status(201)
      .json({ login: true, url: '/', message: 'Вход прошел успешно' });
  } catch (error) {
    res.status(500).json({ login: false, message: 'Ошибка при входе' });
  }
});

authRouter.post('/reg', async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    if (!email) {
      res.status(404).json({ login: false, message: 'Введите email' });
      return;
    }
    if (!userName) {
      res.status(404).json({ login: false, message: 'Введите имя' });
      return;
    }
    if (!password || password.length < 8) {
      res.status(404).json({ login: false, message: 'Введите пароль' });
      return;
    }
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      res
        .status(403)
        .json({ reg: false, message: 'Такой пользователь уже существует' });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      userName,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    req.session.userId = newUser.id;
    res.status(201).json({
      reg: true,
      url: '/',
      message: 'Регистрация прошла успешно',
    });
  } catch (error) {
    res.status(500).json({ reg: false, message: 'Ошибка при регистрации' });
  }
});

authRouter.get('/logout', (req, res) => {
  const { userId } = req.session;
  if (userId) {
    try {
      req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/');
      // res.status(204).json({ message: 'Выход прошел успешно' });
    } catch (error) {
      res.status(500).json({ login: false, message: 'Ошибка при выходе' });
    }
  }
});

module.exports = authRouter;
