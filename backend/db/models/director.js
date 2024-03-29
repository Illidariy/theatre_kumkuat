const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Spectacle, Photo }) {
      Director.Spectacle = Director.hasMany(Spectacle, {
        foreignKey: 'directorId',
      });
      Director.Photo = Director.hasMany(Photo, {
        foreignKey: 'directorId',
      });
    }
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    secondName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    mainPhoto: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    smallPhoto: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    like: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    dislike: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    modelName: 'Director',
    tableName: 'Directors',
  };
  Director.init(attributes, options);
  return Director;
};
