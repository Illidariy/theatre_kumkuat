/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        title: 'title',
        body: 'body',
        photo: 'photo',
        price: 666,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Products', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
