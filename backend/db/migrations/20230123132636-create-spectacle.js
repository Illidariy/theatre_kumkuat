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
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      premiere: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      censor: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      isActual: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      mainPhoto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      smallPhoto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      directorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Directors',
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
    await queryInterface.createTable('Spectacles', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Spectacles');
  },
};
