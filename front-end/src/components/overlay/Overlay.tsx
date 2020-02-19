import React from 'react';
import { Link } from 'react-router-dom';
import GenericButton from '../common/button/Button';

const Overlay: React.FC = () => {
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
      </div>
    </div>
  );
};

export default Overlay;
