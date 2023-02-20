const actorsRouter = require('express').Router();
const { Actor } = require('../db/models');

actorsRouter.get('/', async (req, res) => {
  try {
    const actors = await Actor.findAll({ raw: true });
    res.status(200).json(actors);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

actorsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByPk({ where: id });
    res.status(200).json(actor);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = actorsRouter;
