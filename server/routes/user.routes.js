// inside of user.routes.js
const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');

module.exports = function(app) {
  app.post("/api/register", UserController.Register);
  app.post("/api/login", UserController.Login);
  // this route now has to be authenticated
  app.get("/api/users", authenticate, UserController.getAll);
}
