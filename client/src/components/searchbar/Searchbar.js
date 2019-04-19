import React from "react";
import Style from "../searchbar/style.css";

export const Input = (props) => {
    return (
        <input type="text" className="form-control" {...props}/>
    )
}

export const FormBtn = (props) => {
    return (
        <div className=" d-flex justify-content-end">
            <button type="submit" {...props} className="btn btn-primary"> {props.children} </button>
        </div>
    )
}