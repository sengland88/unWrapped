var db = require("../models");

module.exports = function(app) {
  app.put("/api/parties", function(req, res) {
    db.Party.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbParty) {
      res.json(dbParty);
    });
  });
};
