import React from "react";
import Style from "../card/style.css"

const Card = () => {
    return (
        <li class="media card-margin">
            <img src="https://via.placeholder.com/150" class="mr-3" alt="placeholder" />
            <div class="media-body ">
                <h5 class="mt-0 mb-1">Book Title</h5>
                <p>This book is a story about a guy who does a thing written by a guy who 
                    liked to write about guys who liked to go out of their way to do things.</p>
                <div class="row">
                <div className="col-md-6">
                    <small>Author</small>
                </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <button type="button" class="view-btn" href="/">View</button>
                        <button type="button" class="save-btn" href="/">Save</button>
                    </div>
                </div>
                
            </div>
        </li>
    )
}

export default Card;