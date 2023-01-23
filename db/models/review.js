const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Spectacle }) {
      Review.User = Review.belongsTo(User, {
        foreignKey: 'userId',
      });
      Review.Spectacle = Review.belongsTo(Spectacle, {
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
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    spectacleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Spectacles',
        key: 'id',
      },
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
    modelName: 'Review',
    tableName: 'Reviews',
  };
  Review.init(attributes, options);
  return Review;
};
