var db = require("../models");
const path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/welcome", function(req, res) {
    res.render("welcome");
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
  
  app.get("/updateParty", function(req, res) {
    res.render("updateParty");
  });

  app.get("/myRsvps", function(req, res) {
    res.render("myRsvps");
  });

  app.get("/output.pdf", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/output.pdf"));
  });

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });


};
