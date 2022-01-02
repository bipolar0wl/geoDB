const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("chemicalElement2chemicalComposition", {
    percent: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
};
