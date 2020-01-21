const express = require('express');
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose');
const schema = require('./schema/schema')
const cors = require('cors');


const app = express();
const PORT = 4000;

// allow cross-origin requests
app.use(cors())


const DB_URL = 'mongodb+srv://M_Ninja:ABCDEF123g@cluster0-0xtql.mongodb.net/local_library?retryWrites=true&w=majority'
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
})

// midllware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`app is listing on port ${PORT}`);
})