const spectaclesRouter = require('express').Router();
const Spectacles = require('../views/Spectacles');
const { Spectacle, User } = require('../db/models');

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

module.exports = spectaclesRouter;
