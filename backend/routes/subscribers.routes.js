const router = require('express').Router();
const { Subscribe } = require('../db/models');

router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = await Subscribe.create({ email });
    res.status(200).json({ subscriber });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
