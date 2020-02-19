import { verifyToken } from '../../../services/token-service';
import ApplicationError from '../../../utils/Error/ApplicationError';

export const resolvers = {
  Query: {
    events(_, args, context) {
      console.log(context.req.headers.authorization.split(' ')[1]);
      if (!verifyToken(context.req.headers.authorization.split(' ')[1])) {
        throw ApplicationError('Unauthorized', 401);
      }
      return [
        {
          id: 'asfd',
          dateTo: 'asdfaf',
          dateFrom: 'asdfaf'
        }
      ];
    }
  }
};
