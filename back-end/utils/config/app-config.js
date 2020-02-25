export const corsConfig = {
  origin: '*',
  credentials: true,
  methods: ['PUT', 'POST', 'GET', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Content-Length',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'x-access-token'
  ]
};
/**
 * Added React app to get it working in front end as well
 */
export const facebook_id = process.env.REACT_APP_FACEBOOK_ID;
export const facebook_secret = process.env.REACT_APP_FACEBOOK_SECRET;

export const twitter_id = process.env.REACT_APP_TWITTER_ID;
export const twitter_secret = process.env.REACT_APP_TWITTER_SECRET;

export const goggle_id = process.env.REACT_APP_GOGGLE_ID;
export const goggle_secret = process.env.REACT_APP_GOGGLE_SECRET;

export const front_end =
  process.env.REACT_APP_FRONT_END || 'http://localhost:3000';
