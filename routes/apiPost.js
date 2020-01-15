var db = require("../models");
var randomize = require('randomatic');

module.exports = function(app) {
  // Create a new example
  app.post("/api/parties", function(req, res) {

    let organizer = randomize('A0', 5)
    let party = randomize('A0', 5)
    console.log(organizer)
    console.log(party)

    console.log(req.body)

    let newOrganizer = {
      partyCode: party,
      organizerName: req.body.name,
      organizerCode: organizer,
      occasion: req.body.type,
      date: req.body.date
    };    

    db.Party.create(newOrganizer).then(function(data) {
      console.log("Woot woot!")
      res.json(data);
    });
  });




  app.post("/api/guests", function(req, res) {
  
    db.Guest.create(req.body).then(function(data) {
      console.log("added")
      res.json(data);
    });
  });
};
