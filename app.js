import React from "react";
import ReactDOM from "react-dom/client";

// a react element is an object  , which gets transpiled into core react code by babel

// React.createElement requires 3 paramters -- type of element, an object containing properties(attributes) ,it can be empty , children(optional)
// ReactDOM.createRoot -creates root element in which react components will be rendered
// core react is different from jsx , jsx  makes it easier to write react but it is different than original react

// jsx is html like syntex , it is not html in react or js
// browser do not understand jsx , babel transpiles the jsx so that js engine can understand it
//render -- this method tells react what to display on screen ,it replaces if there is existing content in html

// a function which returns some piece of jsx is called as functional component
// we can skip brackets and return statement if there is only one line - we can use normal and arraw functions
// we can write javascript or react element inside jsx inside -{}
// jax makes code readable it is not react
// calling a component - {Name()} <Name/> or <Name></Name>
// component name should start with uppercase letter
// component composition - combining multiple components

const header = <h1>Hello</h1>;
const Footer = () => {
  return (
    <div>
      <p>Author</p>
      <h4>By Aadesh Wasamkar</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      {header}
      <h2>body</h2>
      {<Footer />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
