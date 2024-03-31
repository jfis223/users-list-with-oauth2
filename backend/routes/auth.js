// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = require("express").Router();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require("passport");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL ?? "";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user
      //   cookies: req.cookies
    });
  } else {
    res.status(200).json({
      success: false,
      message: "loggedOut"
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

router.get("/amazon", passport.authenticate("amazon", { scope: ["profile"] }));

router.get(
  "/amazon/callback",
  passport.authenticate("amazon", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
  })
);

router.post("/login", passport.authenticate("local", { successRedirect: "/auth/local", failureRedirect: "/login/failed", scope: ["profile"] }));
router.get("/local", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headerss", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.json({ success: true });
});

module.exports = router;
