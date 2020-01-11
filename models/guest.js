module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("Guest", {
    guestName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    rsvp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    gift: DataTypes.STRING,
    thankYou: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Guest.associate = function(models) {
    Guest.belongsTo(models.Party, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Guest;
};