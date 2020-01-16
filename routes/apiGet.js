var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
    let email = req.query.email;
    let password = req.query.password;
    console.log(email);
    console.log(password);
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

  app.get("/api/parties", function(req, res) {
    let partyCode = req.query.partyCode;
    console.log(partyCode);
    db.Party.findOne({
      where: {
        partyCode: req.query.partyCode
      }
    }).then(function(dbParties) {
      if(dbParties){
        res.json({
          name: dbParties.name,
          occasion: dbParties.occasion,
          location: dbParties.location,
          date: dbParties.date,
          time: dbParties.time,
          organizer: dbParties.userId
        })
      } else {
        res.json({message: "failed"})
      }
    });
  });
};
