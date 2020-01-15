const express = require('express');
const graphqlHttp = require('express-graphql')
const schema = require('./schema/schema')

const app = express();

const PORT = 4000;

// midllware
app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`app is listing on port ${PORT}`);
})