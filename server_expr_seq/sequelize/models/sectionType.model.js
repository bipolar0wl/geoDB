const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('sectionType', {
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
	},{
		paranoid: true,
	});
};