const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('sectionPhoto', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    path: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};