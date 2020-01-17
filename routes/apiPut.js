var db = require("../models");

module.exports = function(app) {
  app.put("/api/parties/:id", function(req, res) {
    console.log(req.params.id);
    console.log("put is connected");
    db.Party.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbParty) {
      return;
      res.json(dbParty);
    });
  });
};
