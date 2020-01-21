import React from 'react';
import BookList from './components/BookList';


// apoollo client setup
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reacding List</h1>
        {client
          .query({
            query: gql`
        books{
          name
        }
        `
          })
        }
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
