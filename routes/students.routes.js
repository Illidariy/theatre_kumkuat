const studentsRouter = require('express').Router();
const Students = require('../views/Students');
const { Student, User } = require('../db/models');

studentsRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findByPk(userId);
  const students = await Student.findAll();
  res.renderComponent(Students, {
    title: 'Students',
    students,
    user,
  });
});

module.exports = studentsRouter;
