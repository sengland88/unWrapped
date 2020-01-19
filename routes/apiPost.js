var db = require("../models");
var randomize = require('randomatic');

module.exports = function(app) {

  app.post("/api/users", function(req, res) {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function(data) {
      if (data) {
        res.json({message: "Error - email already exists"})
      } else {db.User.create(req.body).then(function(data) {
        res.json(data);
      })};
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

    db.Party.create(newParty).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/rsvp", function(req, res) {

    let rsvp = {
      PartyId: req.body.id,
      UserId: req.body.user

    }

    db.Rsvp.create(rsvp).then(function(data) {
      res.json(data);
    });
  });
};
