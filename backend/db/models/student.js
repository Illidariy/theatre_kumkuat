const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Student.User = Student.belongsTo(User, {
        foreignKey: 'userId',
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
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    exper: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    about: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
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
    modelName: 'Student',
    tableName: 'Students',
  };
  Student.init(attributes, options);
  return Student;
};
