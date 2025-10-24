const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const User = require("../models/userModel");
const dotenv = require("dotenv");

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/home/oauth/profile"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) return done(null, existingUser);

        const user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : undefined,
        });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
