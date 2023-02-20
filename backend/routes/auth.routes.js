const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/login', async (req, res) => {
  const id = req.session.userId;
  if (id) {
    const user = await User.findOne({ where: { id } });
    res.status(201).json({ message: 'Hi', user: user.name });
  } else {
    res.status(403).json({ message: 'no', user: '' });
  }
});

router.post('/login', async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (email && password) {
      let user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        req.session.userId = user.id;
        res.status(201).json({ message: '', user });
      } else {
        res
          .status(403)
          .json({ message: 'Неверный email или пароль', user: {} });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля', user: {} });
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/registration', async (req, res) => {
  try {
    const {
      email, name, password, password2, isAdmin,
    } = req.body;
    if (password !== password2) {
      return res.json({ error: 'Пароли не совпадают' });
    }
    if (email && name && password && password2) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          userName: name,
          email,
          password: hash,
          isAdmin,
        });
        user = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,

        };
        req.session.userId = user.id;
        res.status(201).json({ user });
      } else {
        res
          .status(403)
          .json({ error: 'Такой email уже существует' });
      }
    } else {
      res.status(403).json({ error: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.clearCookie('user_sid').json({ message: 'Session destroy' }));
});

module.exports = router;
