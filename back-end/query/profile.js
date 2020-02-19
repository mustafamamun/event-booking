import uuid from 'uuid';
import Profile from '../models/profile';

export const upSertSocialMediaUser = async user => {
  try {
    const dbUser = await fetchProfileByEmail(user.email);
    if (
      isEmpty(dbUser) ||
      dbUser.firstName !== user.firstName ||
      dbUser.lastName !== user.lastName
    ) {
      const id = uuid.v4();
      const user_id = uuid.v4();
      await insertProfile({
        id,
        user_id,
        ...user
      });
    }
    return { email: user.email, user_id: user_id };
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error');
  }
};

export const fetchProfileByEmail = async email => {
  const profile = await Profile.query().findOne('email', email);
  return profile;
};

export const insertProfile = async user => {
  await Profile.query().insert(user);
};
