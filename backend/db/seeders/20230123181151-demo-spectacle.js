/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        title: 'Кысь',
        body: 'Спектакль-мык "Кысь" по одноимённому роману Т. Толстой.',
        isActual: true,
        mainPhoto:
          'https://sun9-68.userapi.com/impg/8hVFbrCvp1hCDgAfr3IvR1IaIl_puHIGjelU7Q/kjqwY4LzOTk.jpg?size=604x403&quality=95&sign=98bb8cd3146630c88f3b56393df78243&type=album',
        video: '',
        directorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Spectacles', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Spectacles', null, {});
  },
};
