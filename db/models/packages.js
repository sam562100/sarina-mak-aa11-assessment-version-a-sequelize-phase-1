'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Packages.init({
    trackingNumber: DataTypes.INTEGER,
    weightKg: DataTypes.INTEGER,
    sender: DataTypes.STRING,
    recipient: DataTypes.STRING,
    isDelivered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Packages',
  });
  return Packages;
};