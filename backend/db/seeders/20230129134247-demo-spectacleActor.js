/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const data = [
      // Исайкин
      {
        actorId: 1,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 1,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 1,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 1,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 1,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Смирнова
      {
        actorId: 2,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 2,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 2,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Черемонцев
      {
        actorId: 3,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 3,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 3,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 3,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 3,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Мушинская
      {
        actorId: 4,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 4,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 4,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 4,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 4,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Мкртычян
      {
        actorId: 5,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 5,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 5,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 5,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 5,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Штутина
      {
        actorId: 6,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 6,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 6,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 6,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 6,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Полушин
      {
        actorId: 7,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 7,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 7,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 7,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 7,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Климентова
      {
        actorId: 8,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 8,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 8,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 8,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 8,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Елисеева
      {
        actorId: 9,
        spectacleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 9,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 9,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 9,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Бриг
      {
        actorId: 10,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 10,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 10,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Смурова
      {
        actorId: 11,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 11,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 11,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 11,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Туртыгин
      {
        actorId: 12,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 12,
        spectacleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 12,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 12,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 12,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 12,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Фенёв
      {
        actorId: 13,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 13,
        spectacleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 13,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 13,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 13,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Бояркин
      {
        actorId: 14,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 14,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 14,
        spectacleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 14,
        spectacleId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 14,
        spectacleId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Кодиспоти
      {
        actorId: 15,
        spectacleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 15,
        spectacleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        actorId: 15,
        spectacleId: 4,
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
