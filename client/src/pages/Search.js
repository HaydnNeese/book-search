//import the components for this page from the components folder 
//export it to the app.js where you will right a path mapped to "/" that will call on the component= {Search}
//do the same for Saved.js
//inside of App.js right exact path = "/" and "/saved" and import the compiled components from the /pages folder

//------NEXT

//Set up the API's routes and get the program to find information based on the user input while speaking to the API

import React, { Component } from "react";
import { Input, FormBtn } from "../components/searchbar/Searchbar";
import Card from "../components/card/Card";
import API from "../utils/API"

class Search extends Component {
    state = {
        books: [],
        title: ""
    }

    //handle when there is a change to the input on the search
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    //handle when the submit button at the bottom of the book search is clicked
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
            fetch(`${API_URL}${this.state.title}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result.items);
                    this.setState({
                        books: result.items
                    });
                    console.log(`Books state: ${this.state.books[1]}`);
                })
        };
    };

    // saves book to database when save button is clicked
    // still need to map this to the save button
    // put onchange = ()....... on the componenet props page
    // inside the map reference this.handleSaveBook
    handleSaveBook = bookData => {
        API.saveBook(bookData)
            .then(res => alert("Book Saved!"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form>
                    <div className="form-group search-border">
                        <label>Search for a Book</label>
                        <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Enter book name or book author here"
                        />
                        <small className="form-text text-muted">Enter either the title or the author of a book</small>
                        <FormBtn
                            disabled={!(this.state.title)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit
                        </FormBtn>
                    </div>
                </form>
                {this.state.books.length ? (
                    //help with map

                    this.state.books.map(book => {
                        return (
                            <Card
                                key={book.id}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                synopsis={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.infoLink}
                            />
                        )

                    })

                ) : (
                        <h3 className="text-center no-book-font">Let us know what book you are looking for.</h3>
                    )}
            </div>
        )
    }
}

export default Search;
