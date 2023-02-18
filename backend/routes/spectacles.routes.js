const router = require('express').Router();
const { Spectacle } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const spectacles = await Spectacle.findAll();
    res.status(200).json(spectacles);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  const { title, body, isActual, mainPhoto, video, directorId } = req.body;
  try {
    const spectacle = await Spectacle.create({
      title,
      body,
      isActual,
      mainPhoto,
      video,
      directorId,
    });
    res.status(200).json({ spectacle });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, body, isActual, mainPhoto, video, directorId } = req.body;
  try {
    if ((title, body, mainPhoto, video)) {
      const currentSpectacle = await Spectacle.findOne({ where: id });
      if (currentSpectacle) {
        currentSpectacle.title = title;
        currentSpectacle.body = body;
        currentSpectacle.isActual = isActual;
        currentSpectacle.mainPhoto = mainPhoto;
        currentSpectacle.video = video;
        currentSpectacle.directorId = directorId;
        currentSpectacle.save();
        res.status(200).json({ currentSpectacle });
      }
      res.json({ message: 'Spectacle undefined' });
    }
    res.json({ message: ' Fill all fields' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
