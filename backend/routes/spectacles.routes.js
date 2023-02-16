const spectaclesRouter = require('express').Router();
const Spectacles = require('../views/Spectacles');
const SpectaclePage = require('../views/SpectaclePage');
const { Review, Spectacle, User } = require('../db/models');

spectaclesRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const spectacles = await Spectacle.findAll();
  res.renderComponent(Spectacles, {
    title: 'Spectacles',
    spectacles,
    user,
  });
  // вывод через связь many to many
  // const [result] = await Spectacle.findAll({
  //   include: Spectacle.Actor,
  // });
  // console.log(result);
  // const { actors } = result;
  // res.json(actors);
});

spectaclesRouter.get('/:id', async (req, res) => {
  try {
    const { userId } = req.session;
    const { id } = req.params;
    const user = await User.findByPk(userId);
    const spectacle = await Spectacle.findOne({
      include: [
        {
          model: Review,
          where: { id },
        },
      ],
    });
    // console.log(spectacle.Reviews[0].body);
    if (spectacle) {
      res.renderComponent(SpectaclePage, {
        title: 'Spectacle page',
        spectacle,
        user,
      });
    }
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = spectaclesRouter;
