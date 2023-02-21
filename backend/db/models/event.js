const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Spectacle }) {
      Event.Spectacle = Event.belongsTo(Spectacle, {
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
    spectacleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Spectacles',
        key: 'id',
      },
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
    adress: {
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
    modelName: 'Event',
    tableName: 'Events',
  };
  Event.init(attributes, options);
  return Event;
};
