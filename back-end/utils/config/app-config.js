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

export const facebook_id = process.env.FACEBOOK_ID;
export const facebook_secret = process.env.FACEBOOK_SECRET;

export const twitter_id = process.env.TWITTER_ID;
export const twitter_secret = process.env.TWITTER_SECRET;

export const goggle_id = process.env.GOGGLE_ID;
export const goggle_secret = process.env.GOGGLE_SECRET;

export const front_end = process.env.FRONT_END || 'http://localhost:3000';
