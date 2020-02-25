import fetch from 'isomorphic-fetch';
import { backend } from '../../utils/app-config';
export const onGoogleLoginSuccess = async (tokenBlob: any) => {
  const result = await fetch(`${backend}/api/v0/auth/google`, {
    method: 'POST',
    body: tokenBlob,
    redirect: 'follow',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  });
  const json: any = await result.json();
  return json;
};
