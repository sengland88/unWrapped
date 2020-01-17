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
      if(dbUsers) {
        res.json({name: dbUsers.firstName, userId: dbUsers.id})
      } else {
        res.json({message: "failed"})
      }

    });
  });

  app.get("/api/rsvp/:partycode", function(req, res) {
    let partyCode = req.params.partycode;
    console.log(partyCode);
    db.Party.findOne({
      where: {
        partyCode: req.params.partycode
      }
    }).then(function(dbParties) {
      if(dbParties){
        res.json({
          partyId: dbParties.id,
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

  app.get("/api/parties/:user", function(req, res) {
    let user = req.params.user;
    console.log(user);
    db.Party.findAll({
      where: {
        UserId: user
      }
    }).then(function(dbParties) {
      console.log(dbParties)
      if(dbParties){
        res.json({dbParties})
      } else {
        res.json({message: "You have no parties"})
      }
    });
  });

  app.get("/api/parties/update/:id", function(req, res) {
    console.log("connected")
    let id = req.params.id;
    console.log(id);
    db.Party.findOne({
      where: {
        id: id
      }
    }).then(function(dbParty){
      if(dbParty){
        res.json({dbParty})
      } else {
        res.json({message: "Party not found"})
      }
    });
  });
};
