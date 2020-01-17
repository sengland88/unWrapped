var db = require("../models");

module.exports = function(app) {
  app.put("/api/parties/update/new", function(req, res) {
    console.log("put is connected");
    db.Party.update({
      name: req.body.name,
      occasion: req.body.occasion,
      location: req.body.location,
      date: req.body.date,
      time: req.body.time,
      where: {
        id: req.body.id
      }
    }).then(function(updateParty) {
      res.json(updateParty);
      console.log(updateParty);
    });
  });
};
