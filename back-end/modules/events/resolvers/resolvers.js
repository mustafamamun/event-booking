export const resolvers = {
  Query: {
    events(args, context) {
      console.log(context);

      return [
        {
          id: "asfd",
          dateTo: "asdfaf",
          dateFrom: "asdfaf"
        }
      ];
    }
  }
};
