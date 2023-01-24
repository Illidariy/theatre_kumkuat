const authRouter = require('express').Router();
const Login = require('../views/Login');
const Reg = require('../views/Reg');

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

module.exports = authRouter;
