import express from 'express';
import passport from 'passport';
import { twitterAuth, twitterReverse } from '../services/auth-services';
import { socialAuthTokenGenerator } from '../services/token-service';
const router = express.Router();

//SOCIAL- AUTH
router.post('/api/v0/auth/twitter/reverse', twitterReverse);
router.post(
  '/api/v0/auth/twitter',
  twitterAuth,
  passport.authenticate('twitter-token', { session: false }),
  socialAuthTokenGenerator
);

router.post(
  '/api/v0/auth/google',
  passport.authenticate('google-token', { session: false }),
  socialAuthTokenGenerator
);

router.post(
  '/api/v0/auth/facebook',
  passport.authenticate('facebook-token', { session: false }),
  socialAuthTokenGenerator
);

export default router;
