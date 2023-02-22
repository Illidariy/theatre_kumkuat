const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Affiche extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      type: DataTypes.TEXT,
    },
    isActual: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    date: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    time: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    day: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
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
    modelName: 'Affiche',
    tableName: 'Affiches',
  };
  Affiche.init(attributes, options);
  return Affiche;
};
