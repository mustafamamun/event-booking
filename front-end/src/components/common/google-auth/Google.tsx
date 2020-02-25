import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { google_id } from '../../../utils/app-config';
import GenericButton from '../button/Button';
import { onGoogleLoginSuccess } from '../../../services/auth/google-auth';

import './style/index.css';

const Google: React.FC<any> = () => {
  const onSuccess = async (response: any) => {
    console.log(response);
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: 'application/json' }
    );
    console.log(tokenBlob);

    const result: any = await onGoogleLoginSuccess(tokenBlob);
    console.log(result);
  };
  const onFailure = async () => {};
  return (
    <GoogleLogin
      render={renderProps => (
        <GenericButton
          variant="outline-info"
          size="sm"
          onClick={renderProps.onClick}
          text={
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>
          }
        />
      )}
      clientId={google_id}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default Google;
