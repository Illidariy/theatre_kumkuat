const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Spectacle }) {
      Actor.Spectacle = Actor.belongsTo(Spectacle, {
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
    firstName: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    secondName: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    spectacleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Spectacles',
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
    modelName: 'Actor',
    tableName: 'Actors',
  };
  Actor.init(attributes, options);
  return Actor;
};
