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
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      exper: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      about: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      phone: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
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
    await queryInterface.createTable('Students', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Students');
  },
};
