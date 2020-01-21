var db = require("../models");

module.exports = function(app) {
  app.put("/api/parties/update/party", function(req, res) {
    db.Party.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(updateParty) {
      res.json(updateParty);
    });
  });

  app.put("/api/rsvp/updateinfo", function(req, res) {
    db.Rsvp.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(updateParty) {
      res.json(updateParty);
    });
  });
};
