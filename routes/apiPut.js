var db = require("../models");

module.exports = function(app) {
  app.put("/api/parties/update/party", function(req, res) {
    console.log("put is connected");
    console.log(req);
    db.Party.update(req.body,
    {
    where: {
        id: req.body.id
      }
    }).then(function(updateParty) {
      console.log("succes!");
      res.json(updateParty);
      console.log(updateParty);
    });
  });
};
