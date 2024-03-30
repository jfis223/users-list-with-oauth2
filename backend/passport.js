// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GithubStrategy = require("passport-github2").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FacebookStrategy = require("passport-facebook").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AmazonStrategy = require("passport-amazon").Strategy;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const passport = require("passport");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? "";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID ?? "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET ?? "";

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID ?? "";
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET ?? "";

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
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback"
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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
