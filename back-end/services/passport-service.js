import uuid from 'uuid';
import TwitterTokenStrategy from 'passport-twitter-token';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';
import FacebookTokenStrategy from 'passport-facebook-token';
import { upSertSocialMediaUser } from '../query/profile';
import {
  facebook_id,
  facebook_secret,
  twitter_id,
  twitter_secret,
  goggle_id,
  goggle_secret
} from '../utils/config/app-config';

module.exports = passport => {
  passport.use(
    new TwitterTokenStrategy(
      {
        consumerKey: twitter_id,
        consumerSecret: twitter_secret,
        includeEmail: true
      },
      async (token, tokenSecret, profile, done) => {
        try {
          const userDetails = {
            email: profile._json.email,
            user_id: uuid.v4(),
            firstName: profile._json.name
          };
          const user = await upSertSocialMediaUser(userDetails);
          return done(null, user);
        } catch (error) {
          console.log(error);
          return done(null, false);
        }
      }
    )
  );
  passport.use(
    new GoogleTokenStrategy(
      {
        clientID: goggle_id,
        clientSecret: goggle_secret
      },
      async (accessToken, refreshToken, profile, done) => {
        const userDetails = {
          email: profile._json.email,
          user_id: uuid.v4(),
          firstName: profile._json.given_name,
          lastName: profile._json.family_name
        };
        try {
          const user = await upSertSocialMediaUser(userDetails);
          return done(null, user);
        } catch (error) {
          return done(null, false);
        }
      }
    )
  );
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: facebook_id,
        clientSecret: facebook_secret
      },
      async (accessToken, refreshToken, profile, done) => {
        const userDetails = {
          email: profile._json.email,
          user_id: uuid.v4(),
          firstName: profile._json.first_name,
          lastName: profile._json.last_name
        };
        try {
          const user = await upSertSocialMediaUser(userDetails);
          return done(null, user);
        } catch (error) {
          return done(null, false);
        }
      }
    )
  );
};
