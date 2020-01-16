var db = require("../models");
var randomize = require('randomatic');

module.exports = function(app) {

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(data) {
      console.log("Successful");
      res.json(data);
    });
  });

  app.post("/api/parties", function(req, res) {

    let party = randomize('A0', 5)

    let newParty = {
      name: req.body.name,
      occasion: req.body.occasion,
      location: req.body.location,
      date: req.body.date,
      time: req.body.time,
      partyCode: party,
      UserId: req.body.UserId
    }

    console.log(newParty)

    db.Party.create(newParty).then(function(data) {      
      console.log(party)
      console.log("Successful");
      console.log(data)
      res.json(data);
    });
  });

  app.post("/api/rsvp", function(req, res) {

    let rsvp = {
      PartyId: req.body.id,
      UserId: req.body.user

    }

    db.Rsvp.create(rsvp).then(function(data) {      
      console.log("Successful");
      console.log(data)
      res.json(data);
    });
  });
};
