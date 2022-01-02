const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "chemicalComposition",
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
