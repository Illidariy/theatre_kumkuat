const router = require('express').Router();
const { Spectacle } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const spectacles = await Spectacle.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
    });
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

router.put('/:spectacleId', async (req, res) => {
  const { spectacleId } = req.params;
  const { title, body, isActual, mainPhoto, video, directorId } = req.body;
  try {
    const currentSpectacle = await Spectacle.findOne({
      where: { id: Number(spectacleId) },
    });
    if (currentSpectacle) {
      currentSpectacle.title = title;
      currentSpectacle.body = body;
      currentSpectacle.isActual = isActual;
      currentSpectacle.mainPhoto = mainPhoto;
      currentSpectacle.video = video;
      currentSpectacle.directorId = directorId;
      const newSpectacle = await currentSpectacle.save();
      // const newSpectacle = await Spectacle.findOne({
      //   where: { id: spectacleId },
      // });
      // console.log(newSpectacle);
      return res.status(200).json({ spectacle: newSpectacle });
    }
    return res.json({ message: 'Spectacle undefined' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  return res.json({});
});

router.delete('/:idSpectacle', async (req, res) => {
  const { idSpectacle } = req.params;
  try {
    const deleted = await Spectacle.destroy({
      where: { id: Number(idSpectacle) },
    });
    if (deleted > 0) {
      return res.status(200).json({ message: 'fulfilled' });
    }
    res.status(500).json({ message: 'rejected' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  return res.json({});
});

module.exports = router;
