const spectaclesRouter = require('express').Router();
const Spectacles = require('../views/Spectacles');
const { Spectacle } = require('../db/models');

spectaclesRouter.get('/', async (req, res) => {
  const spectacles = await Spectacle.findAll();
  res.renderComponent(Spectacles, {
    title: 'Spectacles',
    spectacles,
  });
});

module.exports = spectaclesRouter;
