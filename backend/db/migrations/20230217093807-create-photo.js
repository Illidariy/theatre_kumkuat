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
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      actorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Actors',
          key: 'id',
        },
      },
      directorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Directors',
          key: 'id',
        },
      },
      spectacleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Spectacles',
          key: 'id',
        },
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
    await queryInterface.createTable('Photos', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Photos');
  },
};
