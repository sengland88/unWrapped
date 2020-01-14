var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/rsvp", function(req, res) {
    res.render("rsvp");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.get("/registry", function(req, res) {
    res.render("registry");
  });

  app.get("/guest", function(req, res) {
    res.render("guest");
  });
  app.get("/guest_registry", function(req, res) {
    res.render("guest_registry");
  });
};
