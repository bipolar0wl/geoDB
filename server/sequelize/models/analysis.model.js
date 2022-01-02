const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "analysis",
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
