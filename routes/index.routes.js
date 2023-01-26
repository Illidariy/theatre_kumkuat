const indexRouter = require('express').Router();
const Home = require('../views/Home');
const { User } = require('../db/models');

indexRouter.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    res.renderComponent(Home, {
      title: 'Home Page',
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = indexRouter;
