var db = require("../models");

module.exports = function(app) {
  app.delete("/api/parties/:id", function(req, res) {
    db.Party.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
