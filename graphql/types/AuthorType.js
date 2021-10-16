const {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "Book author",
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)}
  })
})

module.exports = {AuthorType}
