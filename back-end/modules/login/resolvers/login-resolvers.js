import { registerUser, loginUser } from '../handler/login-handler';
import ApplicationError from '../../../utils/Error/ApplicationError';

export const resolvers = {
  Query: {
    login: async (_, args, context) => {
      try {
        const success = await loginUser(args);
        return success;
      } catch (error) {
        throw new ApplicationError(
          error.message || 'Internal server error',
          error.code || 500
        );
      }
    }
  },
  Mutation: {
    register: async (_, args, context) => {
      try {
        const success = await registerUser(args);
        return success;
      } catch (error) {
        throw new ApplicationError(
          error.message || 'Internal server error',
          error.code || 500
        );
      }
    }
  }
};
