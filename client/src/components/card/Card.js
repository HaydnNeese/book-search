import React, { Component } from "react";
import Style from "../card/style.css"

//set up the card with props to be filled with the mapping of the state.books array on search.js
class Card extends Component {
    render() {
        //since this is a class-based component the props has to be defined as a variable
        const { props } = this;
        return (
            <div>
                < div className="media card-style" >
                    <img src={props.image} className="mr-3" alt={`Cover for the book ${props.title}`} />
                    <div className="media-body ">
                        <h5 className="mt-0 mb-1">{props.title}</h5>
                        <p>{props.synopsis}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <small>{props.author}</small>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <a href={props.link}><button type="button" className="view-btn" >View</button></a>
                                <button onClick={props.handleSaveBook} id={props.id} type="button" className="save-btn" href="/">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )         
    }
}

export default Card;