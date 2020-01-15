module.exports = function(sequelize, DataTypes) {
  var Party = sequelize.define("Party", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    occasion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    time: DataTypes.STRING,
    partyCode: DataTypes.STRING
  });

  Party.associate = function(models) {
    Party.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Party.hasMany(models.Rsvp, {
      onDelete: "cascade"
    });
  };

  return Party;
};