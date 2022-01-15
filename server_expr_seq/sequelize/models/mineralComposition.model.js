const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('mineralComposition', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};