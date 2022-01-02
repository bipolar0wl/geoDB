const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tag",
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
