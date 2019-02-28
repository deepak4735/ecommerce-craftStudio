/*
  Here we setup the graphql Yoga server
*/
const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // We need to access the db from resolvers, which we
    // can do via context
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
