const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spectacle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
      type: DataTypes.TEXT,
    },
    actorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    directorId: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'Spectacle',
    tableName: 'Spectacles',
  };
  Spectacle.init(attributes, options);
  return Spectacle;
};
