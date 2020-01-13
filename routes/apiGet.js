var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/guests", function(req, res) {
    db.Guest.findAll({
      where: {
        partyCode: Guest.partyCode
      }
    }).then(function(dbGuests) {
      res.json(dbGuests);
    });
  });
};
