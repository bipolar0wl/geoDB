const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("book", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    publisher: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.STRING,
    },
    ref: {
      type: DataTypes.STRING,
    },
    DOI: {
      type: DataTypes.STRING,
    },
  },{
    paranoid: true,
  });
};
