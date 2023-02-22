const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const affiches = await Event.findAll();
    res.status(200).json(affiches);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
