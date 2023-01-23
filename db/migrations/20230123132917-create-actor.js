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
      firstName: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      secondName: {
        allowNull: false,
        unique: true,
        type: Sequelize.TEXT,
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
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
      spectacleId: {
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
    await queryInterface.createTable('Actors', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Actors');
  },
};
