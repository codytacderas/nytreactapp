// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Routing for home page
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};