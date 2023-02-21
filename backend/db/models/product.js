const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo }) {
      Product.User = Product.belongsTo(User, {
        foreignKey: 'userId',
      });
      Product.Photo = Product.hasMany(Photo, {
        foreignKey: 'productId',
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
    body: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
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
    modelName: 'Product',
    tableName: 'Products',
  };
  Product.init(attributes, options);
  return Product;
};
