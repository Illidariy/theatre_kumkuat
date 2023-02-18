const directorsRouter = require('express').Router();
const { Director } = require('../db/models');

directorsRouter.get('/', async (req, res) => {
  try {
    const actors = await Director.findAll();
    res.status(200).json(actors);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = directorsRouter;
