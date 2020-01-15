module.exports = function(sequelize, DataTypes) {
	var Party = sequelize.define("Party", {
		partyCode: {
			type: DataTypes.STRING,
		},
		organizerName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
		len: [1]
		}
		},
		organizerCode: DataTypes.STRING,
		occasion: {
			type: DataTypes.STRING,
		allowNull: false,
		validate: {
		len: [1]
		}
		},
		date: DataTypes.DATEONLY
	});

	Party.associate = function(models) {
		Party.hasMany(models.Guest, {
			onDelete: "cascade"
		});
	};

	return Party;
};