import React from 'react';
import { Link } from 'react-router-dom';
import GenericButton from '../common/button/Button';
import GoogleLogin from '../common/google-auth/Google';
import FacebookLogin from '../common/facebook-auth/Facebook';
import Instagram from '../common/instagram-auth/Instagram';
import Twitter from '../common/twitter-auth/Twitter';

const Overlay: React.FC<any> = () => {
  return (
    <div>
      <div className="text-center overlay">
        <h2 className={'mb-5 text-white'}>
          You have to be a registered user to access this service
        </h2>
        <Link to="/login">
          <GenericButton
            variant="info"
            className="pl-5 pr-5 mr-2"
            size="lg"
            text="Login"
          />
        </Link>
        <Link to="/sign-up">
          <GenericButton
            variant="info"
            className="pl-5 pr-5 mr-2"
            size="lg"
            text="Sign up"
          />
        </Link>
        <div className={'mt-4'}>
          <GoogleLogin />
          <FacebookLogin />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
