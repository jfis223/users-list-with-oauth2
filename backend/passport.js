// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GithubStrategy = require("passport-github2").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const LocalStrategy = require("passport-local").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AmazonStrategy = require("passport-amazon").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require("passport");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? "";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID ?? "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET ?? "";

const AMAZON_APP_ID = process.env.AMAZON_APP_ID ?? "";
const AMAZON_APP_SECRET = process.env.AMAZON_APP_SECRET ?? "";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new AmazonStrategy(
    {
      clientID: AMAZON_APP_ID,
      clientSecret: AMAZON_APP_SECRET,
      callbackURL: "/auth/amazon/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (username, password, done) => {
      try {
        const data = {
          email: username,
          password: password
        };
        const response = await axios.post("https://reqres.in/api/login", data);

        if (response.data.token) {
          // Here we should find the user by checking the database that in this case does not exist
          return done(null, {
            id: 4,
            email: "eve.holt@reqres.in",
            displayName: "Eve Holt",
            photos: [{ value: "https://reqres.in/img/faces/4-image.jpg" }]
          });
        } else {
          return done(null, false, { message: "Invalid credentials" });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
