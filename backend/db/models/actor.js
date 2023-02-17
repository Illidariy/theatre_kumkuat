const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Spectacle, Photo }) {
      Actor.Spectacle = Actor.belongsToMany(Spectacle, {
        through: 'SpectaclesActors',
        foreignKey: 'actorId',
        otherKey: 'spectacleId',
        as: 'spectacles',
      });
      Actor.Photo = Actor.hasMany(Photo, {
        foreignKey: 'actorId',
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
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    body: {
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
    modelName: 'Actor',
    tableName: 'Actors',
  };
  Actor.init(attributes, options);
  return Actor;
};