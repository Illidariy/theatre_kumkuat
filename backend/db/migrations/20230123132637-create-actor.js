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
        type: Sequelize.TEXT,
      },
      secondName: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      mainPhoto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      smallPhoto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      like: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      dislike: {
        allowNull: false,
        type: Sequelize.TEXT,
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
