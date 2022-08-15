const { ApolloServer, gql, UserInputError } = require("apollo-server-lambda")
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core")

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    error: String
    userWithID(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    error: () => {
      throw new Error("Error")
    },
    userWithID: (_, { id }) => {
      if (id < 1) {
        throw new UserInputError("ID must be greater than 0")
      }
      return { id: id, name: "User " + id }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  formatError: (err) => {
    const {
      message,
      extensions: { code },
    } = err
    return { message, code }
  },
})

exports.graphqlHandler = server.createHandler()

