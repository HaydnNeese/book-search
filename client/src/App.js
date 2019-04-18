import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Searchbar from "./components/searchbar/Searchbar";
import Card from "./components/card/Card";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Searchbar />
        <ul>
          <Card />
        </ul>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
