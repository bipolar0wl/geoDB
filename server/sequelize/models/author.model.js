const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('author', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};