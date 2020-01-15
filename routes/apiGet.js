var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
    let email = req.query.email
    let password = req.query.password
    console.log(email);
    console.log(password)
    console.log("connected");
    db.User.findOne({
      where: {
        email: req.query.email,
        password: req.query.password
      }
    }).then(function(dbUsers) {
      if(dbUsers){
        res.json({name: dbUsers.firstName, userId: dbUsers.id})
      }else {
        res.json({message: "failed"})
      }

    });
  });
};
