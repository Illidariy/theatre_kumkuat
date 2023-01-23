/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        firstName: 'Ольга',
        secondName: 'Климентова',
        photo:
          'https://sun9-51.userapi.com/impf/c628426/v628426012/4cb97/2qQUmD_YzDo.jpg?size=515x604&quality=96&sign=598b53f2188e3e5c46426cae8f133723&type=album',
        title: 'Основные роли',
        body: 'Комсомолка Нина («ХРМСА»), Ангустиас («Дом Бернарды Альбы (Суд)») (спектакль-ремейк), Эмили («Адресат не указан»), Дуняша («Вишнёвый сад»), Моника («Пациенты»), Маргарита Ивановна («Самоубийца»), Оленька («Кысь»), роли в ремейках спектаклей «Вам и не снилось» и «Алиса в Зазеркалье», роли в спектаклях «Лабрум», «Страх».',
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Actors', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Actors', null, {});
  },
};
