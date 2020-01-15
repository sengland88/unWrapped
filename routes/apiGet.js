var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
  //   let email = req.query.email
  //   console.log(email);
  //   console.log("connected");
  //   db.User.findOne({
  //     where: {
  //       email: email
  //     },
  //     include: [db.Party]
  //   }).then(function(dbGuests) {
  //     console.log("hey!")
  //     res.json(dbGuests);
  //   });
  });
};
