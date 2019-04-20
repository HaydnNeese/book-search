import React, { Component } from "react";
import SavedCard from "../components/savedCard/savedCard";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    }

    //make loadbooks and deletebooks methods

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    handleDeleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.books.length ? (
                    this.state.books.map(book => {
                        return (
                            <SavedCard 
                            key = {book._id}
                            id= {book._id}
                            title = {book.title}
                            author = {book.author}
                            synopsis = {book.synopsis}
                            image = {book.image}
                            link = {book.link}
                            handleDeleteBook = {this.handleDeleteBook}
                            />
                        )
                    })
                ) : (
                    <h3 className="text-center no-book-font">You have no saved books.</h3>
                )}
            </div>
        )
    }
}

export default Saved;