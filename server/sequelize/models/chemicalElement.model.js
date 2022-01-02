const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "chemicalElement",
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      paranoid: true,
    }
  );
};
