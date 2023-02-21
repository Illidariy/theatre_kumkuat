const router = require('express').Router();
const { Director } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const directors = await Director.findAll();
    res.status(200).json(directors);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findOne({ where: { id } });
    res.status(200).json(director);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
