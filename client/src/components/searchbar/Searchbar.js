import React from "react";
import Style from "../searchbar/style.css";

const Searchbar = () => {
    return (
        <form>
            <div className="form-group search-border">
                <label for="bookInput">Search for a Book</label>
                <input type="text" className="form-control" id="bookInput" placeholder="Enter book name here" />
                <small id="emailHelp" className="form-text text-muted">Only enter the title of the book</small>
                <div className=" d-flex justify-content-end">
                    <button type="submit" id="book-submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Searchbar;