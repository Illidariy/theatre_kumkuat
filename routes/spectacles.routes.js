const spectaclesRouter = require('express').Router();
const Spectacles = require('../views/Spectacles');
const { Spectacle, User } = require('../db/models');

spectaclesRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const spectacles = await Spectacle.findAll();
  res.renderComponent(Spectacles, {
    title: 'Spectacles',
    spectacles,
    user,
  });
});

module.exports = spectaclesRouter;
