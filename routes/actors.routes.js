const actorsRouter = require('express').Router();
const Actors = require('../views/Actors');
const { Actor, User } = require('../db/models');

actorsRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const actors = await Actor.findAll();
  res.renderComponent(Actors, {
    title: 'Actors',
    actors,
    user,
  });
});

module.exports = actorsRouter;
