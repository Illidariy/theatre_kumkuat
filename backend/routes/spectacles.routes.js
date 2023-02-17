const spectaclesRouter = require('express').Router();
const { Spectacle } = require('../db/models');

spectaclesRouter.get('/', async (req, res) => {
  try {
    const spectacles = await Spectacle.findAll();
    res.status(200).json(spectacles);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

spectaclesRouter.post('/', async (req, res) => {
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

module.exports = spectaclesRouter;
