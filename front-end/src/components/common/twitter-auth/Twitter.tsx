import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { backend } from '../../../utils/app-config';

import './style/index.css';

const Twitter = () => {
  const failure = () => {};
  const twitterResponse = async (params: any) => {
    const user = await params.json();
    console.log(user);
  };
  return (
    <TwitterLogin
      loginUrl={`${backend}/api/v0/auth/twitter`}
      onFailure={failure}
      onSuccess={twitterResponse}
      requestTokenUrl={`${backend}/api/v0/auth/twitter/reverse`}
      style={{ border: 0, background: 'transparent' }}
    >
      <div className="twitter-btn">
        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
      </div>
    </TwitterLogin>
  );
};

export default Twitter;
