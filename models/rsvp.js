module.exports = function(sequelize, DataTypes) {
  var Rsvp = sequelize.define("Rsvp", {
		gift: DataTypes.STRING,
    thankYou: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
});

	Rsvp.associate = function(models) {
    Rsvp.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
		});
		Rsvp.belongsTo(models.Party, {
      foreignKey: {
        allowNull: false
      }
    });
	};
	
  return Rsvp;
};