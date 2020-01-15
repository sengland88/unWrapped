module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    address: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 12]
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Party, {
      onDelete: "cascade"
    });
    User.hasMany(models.Rsvp, {
      onDelete: "cascade"
    });
  }

  return User;
};