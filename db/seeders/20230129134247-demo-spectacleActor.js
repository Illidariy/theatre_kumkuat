/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        actorId: 1,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('SpectaclesActors', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('SpectaclesActors', null, {});
  },
};
