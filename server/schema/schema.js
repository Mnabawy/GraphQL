const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString, GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;
const _ = require('lodash')

const books = [
  { name: 'name of the wind', genre: 'fantasy', id: '1' },
  { name: 'name of the warth', genre: 'fantasy', id: '2' },
  { name: 'name of the sea', genre: 'fantasy', id: '3' },
]

const authors = [
  { name: 'taha', age: 34, id: '1' },
  { name: 'abas', age: 33, id: '2' },
  { name: 'mahmoud', age: 440, id: '3' },
]


const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db other surce
        return _.find(books, { id: args.id })
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})