/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        body: 'url actor',
        actorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: 'url director',
        directorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        body: 'url spectacle',
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Photos', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
