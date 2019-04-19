import React from "react";
import Style from "../jumbotron/style.css"

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center fixed">
            <div className="container">
                <h1 className="display-4">Google Book Finder</h1>
                <p className="lead">Search and Save Your Favorite Books</p>
            </div>
        </div>
    )
}

export default Jumbotron;