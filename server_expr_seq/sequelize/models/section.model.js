const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('section', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};