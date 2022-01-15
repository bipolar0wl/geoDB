const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('mineral', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};