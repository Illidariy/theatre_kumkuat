/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      spectacleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Spectacles',
          key: 'id',
        },
      },
      isActual: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      time: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      day: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      adress: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    await queryInterface.createTable('Events', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Events');
  },
};