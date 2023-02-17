const actorsRouter = require('express').Router();
const { Actor } = require('../db/models');

actorsRouter.get('/', async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.status(200).json(actors);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = actorsRouter;
