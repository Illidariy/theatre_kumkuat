const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spectacle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Actor, Director, Review }) {
      Spectacle.Actor = Spectacle.hasMany(Actor, {
        foreignKey: 'spectacleId',
      });
      Spectacle.Director = Spectacle.belongsTo(Director, {
        foreignKey: 'directorId',
      });
      Spectacle.Review = Spectacle.hasMany(Review, {
        foreignKey: 'spectacleIdId',
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
      unique: true,
      type: DataTypes.TEXT,
    },
    body: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    // actorId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
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
