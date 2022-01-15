const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('texture', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};