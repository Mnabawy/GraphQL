import React from "react"
import { graphql } from "react-apollo"

import { getBookQuery } from "../queries/queries"

class BookDetails extends React.Component {
  displayBookDetails() {
    const { book } = this.props.data
    console.log(book);
    
    if (book) {
      return (
        
        <div>
      
          <h1>{book.name}</h1>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>all books by this author</p>
          {book.author.books.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </div>
      )
    } else {
      return <p>no books selected ... </p>
    }
  }

  render() {
    
    return <div>{this.displayBookDetails()}</div>
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails)
