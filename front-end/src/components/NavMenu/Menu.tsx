import React, { useState } from 'react';
import { push as AppMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import GenericButton from '../common/button/Button';
import GoogleLogin from '../common/google-auth/Google';
import FacebookLogin from '../common/facebook-auth/Facebook';
import Instagram from '../common/instagram-auth/Instagram';
import Twitter from '../common/twitter-auth/Twitter';
import './style/index.css';

const Menu: React.FC<any> = props => {
  const [mouseOn, setMouseOn] = useState(false);
  const openPhotoUploadModal = () => {};
  return (
    <AppMenu {...props} right>
      <div
        className="menu-item profile-image"
        onMouseOver={() => setMouseOn(true)}
        onMouseLeave={() => setMouseOn(false)}
      >
        {true && (
          <div className="overlay" onClick={openPhotoUploadModal}>
            {' '}
            <div>uplaod</div>
            <FontAwesomeIcon icon={faCamera} size={'1x'} />
          </div>
        )}
        {null ? (
          <div>
            <Image
              src={''}
              roundedCircle
              height={'100px'}
              width={'100px'}
              style={{ border: 0 }}
            />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faUserCircle}
              size={'6x'}
              style={{ color: 'white' }}
            />
          </div>
        )}
      </div>

      <Link className="menu-item pt-3" to="/">
        <span>Mustafa Mamun Khondkar</span>
      </Link>

      <div className="menu-item">
        <GenericButton
          variant="info"
          className="pl-5 pr-5 mr-2"
          size="sm"
          text="Login/Sign up"
        />
      </div>

      <span className="menu-item">or login with</span>
      <div className="menu-item">
        <GoogleLogin />
        <FacebookLogin />
        <Instagram />
        <Twitter />
      </div>
    </AppMenu>
  );
};

export default Menu;
