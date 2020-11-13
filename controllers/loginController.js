const passport = require("../config/passport");

module.exports = function(router) {
  router.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create(req.body)
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Log the user out
  router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  router.get("/api/authenticated/", (req, res) => {
    if (req.user) res.send(true);
    else res.send(false);
  });
}