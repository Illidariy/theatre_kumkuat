const spectaclesRouter = require('express').Router();
const { Spectacle } = require('../db/models');

spectaclesRouter.get('/', async (req, res) => {
  try {
    const perfomances = await Spectacle.findAll();
    res.status(200).json(perfomances);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = spectaclesRouter;
