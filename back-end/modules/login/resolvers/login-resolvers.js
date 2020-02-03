export const resolvers = {
  Query: {
    login(args, context) {
      return {
        message: "akjfasfd",
        token: "askfjasödfk"
      };
    }
  },
  Mutation: {
    register(args, context) {
      return {
        message: "asdfasdf"
      };
    }
  }
};
