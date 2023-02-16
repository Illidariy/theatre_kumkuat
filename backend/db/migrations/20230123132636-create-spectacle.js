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
        unique: true,
        type: Sequelize.TEXT,
      },
      body: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      directorId: {
        allowNull: false,
        unique: true,
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
