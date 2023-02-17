/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        firstName: 'Мария',
        secondName: 'Левицкая',
        mainPhoto: 'url',
        title: 'Коротко',
        body: 'Ученица З. Я. Корогодского, режиссер, актриса, педагог высшей категории, основатель театра-студии «Кумкуат».',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Directors', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Directors', null, {});
  },
};
