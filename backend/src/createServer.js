/*
  Here we setup the graphql Yoga server
*/
const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga server
// Schema and Resolvers are bundled and passed to the
// GraphQLServer, that is imported from graphql-yoga.
// This tells the server what API operations are accepted
// and how they should be resolved
function createServer() {
  return new GraphQLServer({
    // TypeDefs defines the GraphQL schema
    typeDefs: 'src/schema.graphql',
    // The actual implementation of the GraphQL schema
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // We need to access the db from resolvers, which we
    // can do via context
    context: request => ({ ...request, db })
  });
}

module.exports = createServer;
