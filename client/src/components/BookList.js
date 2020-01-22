import React, { Component } from "react"
import { graphql } from "react-apollo"
import * as compose from "lodash.flowright"

import BookDetails from "./BookDetails"
import { getBooksQuery } from "../queries/queries"

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  displayBooks() {
    const data = this.props.getBooksQuery
    if (data.loading) {
      return <h1>loading data</h1>
    } else {
      return data.books.map(book => {
        return (
          <li
            key={book.id}
            onClick={e => {this.setState({ selected: book.id })}}
          >
            {book.name}
          </li>
        )
      })
    }
  }

  render() {
    // console.log(this.props)

    return (
      <div>
        <ul>{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default compose(graphql(getBooksQuery, { name: "getBooksQuery" }))(
  BookList
)
