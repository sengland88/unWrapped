var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email);
    console.log(password)
    console.log("connected");
    db.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
      include: [db.Party]
    }).then(function(dbGuests) {
      console.log("hey!")
      console.log(dbGuests);
    });
  });
};
