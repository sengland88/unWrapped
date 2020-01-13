var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
