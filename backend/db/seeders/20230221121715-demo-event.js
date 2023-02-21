/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        spectacleId: 6,
        isActual: true,
        date: '26.02',
        time: '19:30',
        day: 'Воскресение',
        adress: 'Курляндская ул., 49',
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spectacleId: 4,
        isActual: true,
        date: '04.03',
        time: '20:00',
        day: 'Суббота',
        adress: 'Николая Рубцова ул., 5',
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spectacleId: 1,
        isActual: false,
        date: '',
        time: '',
        day: '',
        adress: 'Курляндская ул., 49',
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Events', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
