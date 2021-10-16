const {GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const {BookType} = require("../types/BookType");
const {AuthorType} = require("../types/AuthorType");
const {books} = require("../../database/database");

const RootMutations = new GraphQLObjectType({
  name: "Mutation",
  description: "Root mutation",
  fields: () => ({
    addBook: {
      type: BookType,
      description: "Add book",
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        authorId: {type: GraphQLNonNull(GraphQLInt)}
      },
      resolve: (parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId
        }
        books.push(book)
        return book
      }
    },
    addAuthor: {
      type: AuthorType,
      description: "Add author",
      args: {
        name: {type: GraphQLNonNull(GraphQLString)}
      },
      resolve: (parent, args) => {
        const author = {
          id: authors.length + 1,
          name: args.name,
        }
        authors.push(author)
        return author
      }
    }
  })
})

module.exports = {RootMutations}
