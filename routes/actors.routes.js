const actorsRouter = require('express').Router();
const Actors = require('../views/Actors');
const { Actor } = require('../db/models');

actorsRouter.get('/', async (req, res) => {
  const actors = await Actor.findAll();
  res.renderComponent(Actors, {
    title: 'Actors',
    actors,
  });
});

module.exports = actorsRouter;
