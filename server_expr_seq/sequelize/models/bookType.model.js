const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "bookType",
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
