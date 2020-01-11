var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  });

  // Load example page and pass in an example by id
  app.get("/about", function(req, res) {
    res.render("about");
  });

  // Render 404 page for any unmatched routes
  app.get("/rsvp", function(req, res) {
    res.render("rsvp");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.get("/registry", function(req, res) {
    res.render("registry");
  });
};

