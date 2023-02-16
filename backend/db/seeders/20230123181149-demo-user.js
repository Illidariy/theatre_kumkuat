require('dotenv').config();
const bcrypt = require('bcrypt');

const saltRounds = 10;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        email: process.env.DEMO_EMAIL,
        password: await bcrypt.hash(process.env.DEMO_PASSWORD, saltRounds),
        userName: 'Creator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
