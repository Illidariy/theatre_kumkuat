const studentsRouter = require('express').Router();
const Students = require('../views/Students');
const StudentPage = require('../views/StudentPage');
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
    const { userId } = req.session;
    const user = await User.findByPk(userId);
    const student = await Student.create({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      age: req.body.age,
      exper: req.body.exper,
      about: req.body.about,
      phone: req.body.phone,
      email: req.body.email,
      userId,
    });
    res.renderComponent(
      StudentPage,
      { student, user } /* , {doctype: false} */,
    );
  } catch (error) {
    res.status(500).json(error.message);
  }
});

studentsRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Student.destroy({
      where: { id, userId: req.session.userId },
    });
    res.json(result);
  } catch (error) {
    res.json(error.message);
  }
});

studentsRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, secondName, age, exper, about, phone, email } = req.body;
    const student = await Student.findOne({
      where: { id, userId: req.session.userId },
    });
    student.firstName = firstName;
    student.secondName = secondName;
    student.age = age;
    student.exper = exper;
    student.about = about;
    student.phone = phone;
    student.email = email;
    student.save();
    res.json({ student, message: 'success' });
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = studentsRouter;
