const {GraphQLSchema} = require("graphql");
const {RootQueries} = require("../queries/RootQueries");
const {RootMutations} = require("../mutations/RootMutations");

const Schema = new GraphQLSchema({
  query: RootQueries,
  mutation: RootMutations
})

module.exports = {Schema}
