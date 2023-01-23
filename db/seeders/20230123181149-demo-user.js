require('dotenv').config();
const bcrypt = require('bcrypt');

const saltRounds = 10;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        login: process.env.DEMO_USER,
        password: await bcrypt.hash(process.env.DEMO_PASSWORD, saltRounds),
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
