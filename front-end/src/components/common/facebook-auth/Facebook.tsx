import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { facebook_id } from '../../../utils/app-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './style/index.css';

const Facebook: React.FC = () => {
  const facebookResponse = async (response: any) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId={facebook_id}
      autoLoad={false}
      callback={facebookResponse}
      fields="name,email"
      size="small"
      textButton=""
      icon={<FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />}
      cssClass="facebook-btn"
    />
  );
};

export default Facebook;
