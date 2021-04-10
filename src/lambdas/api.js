const express = require("express");
const serverless = require("serverless-http");
const {graphqlHTTP} = require("express-graphql");
const bodyParser = require("body-parser");

const schema = require('../graphql/schema')
const resolvers = require('../graphql/resolvers')

const app = express()

app.use(bodyParser.json());
app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

module.exports.handler = serverless(app);