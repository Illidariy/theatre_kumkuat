const router = require('express').Router();
const { Subscribe } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscribe.findAll();
    res.status(200).json(subscribers);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const isFinded = await Subscribe.findOne({ where: { email } });
    if (!isFinded) {
      const subscriber = await Subscribe.create({ email });
      res.status(200).json(subscriber);
    } else {
      res.status(200).json({ message: 'SUBSCRIBED' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
