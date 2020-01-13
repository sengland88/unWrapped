// don't use this file. please work in the individual files while we develop

// var db = require("../models");
// var randomize = require('randomatic');

// let code = randomize('A0', 5)

// console.log(code)

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
