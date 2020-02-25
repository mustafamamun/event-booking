import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { facebook_id } from '../../../utils/app-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './style/index.css';

const Instagram: React.FC = () => {
  const instagramResponse = async (response: any) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId={facebook_id}
      autoLoad={false}
      callback={instagramResponse}
      fields="name,email"
      size="small"
      textButton=""
      icon={<FontAwesomeIcon icon={faInstagram} className="instagram-icon" />}
      cssClass="instagram-btn"
    />
  );
};

export default Instagram;
