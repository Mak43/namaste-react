import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from React"
);
console.log(heading); //it is just an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /* <div id="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")]
  )]
);
root.render(parent);
console.log(parent); //it is just an object

