// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require("cookie-session");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("./passport");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require("passport");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const authRoute = require("./routes/auth");
const app = express();

app.use(cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 }));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

app.use("/auth", authRoute);

app.listen("3000", () => {
  console.log("Listening...");
});
