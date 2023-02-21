const router = require('express').Router();
const { Actor, Spectacle } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const actors = await Actor.findAll({
      raw: true,
      order: [['updatedAt', 'DESC']],
    });
    res.status(200).json(actors);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const actorOne = await Actor.findAll({
      raw: true,
      where: { id },
      include: [
        Actor.Spectacle,
      ],
    });
    console.log(actorOne);
    res.status(200).json(actorOne);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/', async (req, res) => {
  const {
    firstName,
    secondName,
    mainPhoto,
    smallPhoto,
    title,
    body,
    like,
    dislike,
  } = req.body;
  try {
    const actor = await Actor.create({
      firstName,
      secondName,
      mainPhoto,
      smallPhoto,
      title,
      body,
      like,
      dislike,
    });
    res.status(200).json({ actor });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    secondName,
    mainPhoto,
    smallPhoto,
    title,
    body,
    like,
    dislike,
  } = req.body;
  try {
    const currentActor = await Actor.findOne({
      where: { id: Number(id) },
    });
    if (currentActor) {
      currentActor.firstName = firstName;
      currentActor.secondName = secondName;
      currentActor.mainPhoto = mainPhoto;
      currentActor.smallPhoto = smallPhoto;
      currentActor.title = title;
      currentActor.body = body;
      currentActor.like = like;
      currentActor.dislike = dislike;
      const newActor = await currentActor.save();
      return res.status(200).json({ actor: newActor });
    }
    return res.json({ message: 'Actor undefined' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
  return res.json({});
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Actor.destroy({
      where: { id: Number(id) },
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
