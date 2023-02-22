const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spectacle extends Model {
    static associate({ Actor, Director, Photo, Review }) {
      Spectacle.Actor = Spectacle.belongsToMany(Actor, {
        through: 'SpectaclesActors',
        foreignKey: 'spectacleId',
        otherKey: 'actorId',
        as: 'actors',
      });
      Spectacle.Director = Spectacle.belongsTo(Director, {
        foreignKey: 'directorId',
      });
      Spectacle.Review = Spectacle.hasMany(Review, {
        foreignKey: 'spectacleId',
      });
      Spectacle.Photo = Spectacle.hasMany(Photo, {
        foreignKey: 'spectacleId',
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
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    premiere: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    censor: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isActual: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    mainPhoto: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    smallPhoto: {
      allowNull: false,
      type: DataTypes.TEXT,
    },

    directorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Directors',
        key: 'id',
      },
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
