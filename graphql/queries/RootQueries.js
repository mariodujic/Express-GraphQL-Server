const {GraphQLObjectType, GraphQLInt, GraphQLList} = require("graphql");
const {BookType} = require("../types/BookType");
const {AuthorType} = require("../types/AuthorType");
const {books, authors} = require("../../database/database");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      type: BookType,
      description: "Book",
      args: {
        id: {type: GraphQLInt}
      },
      resolve: (_, args) => books.find(book => book.id === args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of books",
      resolve: () => books
    },
    author: {
      type: AuthorType,
      description: "Author",
      args: {
        id: {type: GraphQLInt}
      },
      resolve: (_, args) => authors.find(author => author.id === args.id)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of book authors",
      resolve: () => authors
    }
  })
})

module.exports = {RootQueries: RootQueryType}
