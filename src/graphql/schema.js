const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID
    nome: String
    email: String
    password: String
  }
  type Query {
    user(email: String!): User
    users: [User]
  }
  type Mutation {
    createUser(nome: String!, email: String!, password: String!): User
  }
`);

module.exports = schema