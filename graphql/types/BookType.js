const {GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString} = require("graphql");
const {AuthorType} = require("./AuthorType");
const {authors} = require("../../database/database");

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Books",
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    authorId: {type: GraphQLNonNull(GraphQLInt)},
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find(author => author.id === book.authorId)
      }
    }
  })
})

module.exports = {BookType}
