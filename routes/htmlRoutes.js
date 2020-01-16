var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.render("main");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/welcome", function(req, res) {
    res.render("welcome");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.get("/rsvp", function(req, res) {
    res.render("rsvp");
  });

  app.get("/parties", function(req, res) {
    res.render("parties");
  });

  app.get("/myParties", function(req, res) {
    res.render("myParties");
  });

  app.get("/*", function(req, res) {
    res.render("404");
  });
};
