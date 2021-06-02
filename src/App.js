import "./App.css";
import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Topics from "./Pages/Topics";

const About = () => {
  return (
    <div>
      <h2>AboutPage Component</h2>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>ContactPage Component</h2>
    </div>
  );
};

const Product = () => {
  return (
    <div>
      <h2>ProductPage Component </h2>
      <ul>
        <li>
          <Link to="/product/1">Product -1</Link>
        </li>
        <li>
          <Link to="/product/2">Product -2</Link>
        </li>
        <li>
          <Link to="/product/3">Product -3</Link>
        </li>
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  let { id } = useParams();
  return (
    <div>
      <h2>Product ID : {id} </h2>
      <button>
        <Link to="/product">Back to Product Page</Link>
      </button>
    </div>
  );
};

function App() {
  return (
    <div>
      <div className="App">
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <hr />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route path="/product/:id" children={<ProductDetail />} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
