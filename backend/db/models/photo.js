const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Actor, Director, Product, Spectacle }) {
      Photo.Actor = Photo.belongsTo(Actor, {
        foreignKey: 'actorId',
      });
      Photo.Director = Photo.belongsTo(Director, {
        foreignKey: 'directorId',
      });
      Photo.Product = Photo.belongsTo(Product, {
        foreignKey: 'productId',
      });
      Photo.Spectacle = Photo.belongsTo(Spectacle, {
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
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    actorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Actors',
        key: 'id',
      },
    },
    directorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Directors',
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
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
    modelName: 'Photo',
    tableName: 'Photos',
  };
  Photo.init(attributes, options);
  return Photo;
};
