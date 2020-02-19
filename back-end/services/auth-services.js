import request from 'request-promise';
import {
  twitter_id,
  twitter_secret,
  front_end
} from '../utils/config/app-config';

export const twitterReverse = async (req, res) => {
  const options = {
    method: 'POST',
    uri: 'https://api.twitter.com/oauth/request_token',
    oauth: {
      oauth_callback: `${front_end}/twitter-callback`,
      consumer_key: twitter_id,
      consumer_secret: twitter_secret
    },
    json: true
  };
  try {
    const response = await request(options);
    var jsonStr =
      '{ "' + response.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    return res.status(200).json(JSON.parse(jsonStr));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const twitterAuth = async (req, res, next) => {
  const options = {
    method: 'POST',
    url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
    oauth: {
      consumer_key: twitter_id,
      consumer_secret: twitter_secret,
      token: req.query.oauth_token
    },
    form: { oauth_verifier: req.query.oauth_verifier }
  };
  try {
    const response = await request(options);

    const bodyString =
      '{ "' + response.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    const parsedBody = JSON.parse(bodyString);
    req.body['oauth_token'] = parsedBody.oauth_token;
    req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
    req.body['user_id'] = parsedBody.user_id;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
