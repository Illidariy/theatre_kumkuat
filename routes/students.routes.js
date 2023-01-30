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

studentsRouter.post('/', async (req, res) => {
  try {
    const newStudent = await Student.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      age: req.body.age,
      exper: req.body.exper,
      about: req.body.about,
      phone: req.body.phone,
      email: req.body.email,
    });
    res.renderComponent(Students, { newStudent }, { doctype: false });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = studentsRouter;
