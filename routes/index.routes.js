const indexRouter = require('express').Router();
const Home = require('../views/Home');

indexRouter.get('/', (req, res) => {
  res.renderComponent(Home, {
    title: 'Home Page',
  });
});

module.exports = indexRouter;
