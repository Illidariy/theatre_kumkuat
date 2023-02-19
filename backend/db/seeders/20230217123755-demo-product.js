/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      {
        title: 'Стикер-пак',
        body: 'Мы подготовили для вас набор наших оригинальных стикеров.\nЭти стикеры — наша благодарность за вашу помощь театру. Все полученные средства пойдут на ремонт нашего нового класса.',
        photo: 'backend/public/images/products/stickerPack1.jpg',
        price: 600,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сертификат на 5 спектаклей',
        body: 'Вы сможете посетить 5 любых спектаклей нашего репертуара, а также первыми получить информацию о новых проектах театра.\nЭтот сертификат — наша благодарность за вашу помощь театру. Все полученные средства пойдут на ремонт нашего нового класса.',
        photo: 'backend/public/images/products/certificate.jpg',
        price: 5000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Сумка-шопер',
        body: 'Мы подготовили для вас 3 сумки с цитатами из спектаклей:\n - "Долгая счастливая жизнь"\n - "Глупость какую-то несешь"\n - "А ты в каком городе был сильно влюблен?"\nЭтот шопер — наша благодарность за вашу помощь театру. Все полученные средства пойдут на ремонт нашего нового класса.',
        photo: 'backend/public/images/products/shoper1.jpg',
        price: 1500,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Значок',
        body: 'Вы можете выбрать один из двух значков с нашим логотипом:\n - Кирпичная стена\n - Наш Вишнёвый сад\n Этот значок — наша благодарность за вашу помощь театру. Все полученные средства пойдут на ремонт нашего нового класса.',
        photo: 'backend/public/images/products/pin.jpg',
        price: 200,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Гирлянда',
        body: 'Мы подготовили для вас 6 гирлянд с цитатами из спектаклей:\n - Я - принц!\n - Благолепие\n - Долгая счастливая жизнь\n - Неохота!\n - Хотим танцы\n - Давайте воспарим\nЭта гирлянда — наша благодарность за вашу помощь театру. Все полученные средства пойдут на ремонт нашего нового класса.',
        photo: 'backend/public/images/products/garland1.jpg',
        price: 1000,
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
