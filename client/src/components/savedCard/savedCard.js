import React from "react";
import Style from "../card/style.css"

const savedCard = (props) => {
    return (
        <div class="media card-style">
            <img src={props.image} class="mr-3" alt={`Cover for the book ${props.title}`} />
            <div class="media-body ">
                <h5 class="mt-0 mb-1">{props.title}</h5>
                <p>{props.synopsis}</p>
                <div class="row">
                <div className="col-md-6">
                    <small>{props.author}</small>
                </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <a href={props.link}><button type="button" class="view-btn">View</button></a>
                        <button type="button" onClick={() => props.handleDeleteBook(props.id)} class="delete-btn" href="/">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default savedCard;