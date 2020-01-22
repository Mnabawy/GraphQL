import React, { Component } from "react"
import { graphql } from "react-apollo"
import { getBooksQuery } from '../queries/queries'
import * as compose from "lodash.flowright"


class BookList extends Component {
  displayBooks() {
    const data = this.props.getBooksQuery
    if (data.loading) {
      return <h1>loading data</h1>
    } else {
      return data.books.map(book => {
        return <li key={book.id}>{book.name}</li>
      })
    }
  }



  render() {
    console.log(this.props);

    return (
      <div>
        <ul>{this.displayBooks()}</ul>
      </div>
    )
  }
}

export default compose(
  graphql(getBooksQuery, { name: "getBooksQuery" })
)(BookList)