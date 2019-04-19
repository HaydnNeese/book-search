import React from "react";
import Style from "../navbar/style.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" id="list-color">
                    <li className="nav-item">
                        <a className="nav-link" href="/" data-toggle="tooltip" data-placement="top" title="Click to see the search page">Search</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved" data-toggle="tooltip" data-placement="top" title="Click to see your saved books">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;