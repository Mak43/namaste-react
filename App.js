import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from React"
);
console.log(heading); //it is just an object

//react element
const JSXheading = (
  <h1 id="heading" className="head" tabIndex={2}>
    hello from react element
  </h1>
);
console.log(JSXheading); //it is also an object equivalent to heading

//React functional component 1
const HeadingFunctionalComponent = () => {
  return <h1 id="heading">react functional component 1</h1>;
};
//React functional component 2
// {} inside this we can write any piece of js code
//component composition
const HeadingFunctionalComponent2 = () => (
  <div id="container">
    <HeadingFunctionalComponent />
    <HeadingFunctionalComponent></HeadingFunctionalComponent>
    {HeadingFunctionalComponent()}
    <h2>{100 + 200}</h2>
    {JSXheading}
    <h1 id="heading">react functional component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXheading);
// root.render(<HeadingFunctionalComponent2/>)


///Assignment episose 3
//react element
const headerElement = React.createElement(
  "div",
  { id: "heading", className: "title" },
  [
    React.createElement("h1", { id: "heading1" }, "heading 1"),
    React.createElement("h2", { id: "heading2" }, "heading 2"),
    React.createElement("h3", { id: "heading3" }, "heading 3"),
  ]
);

// root.render(headerElement);

//using jsx

const headerElement2 = (
  <div className="title" id="heading">
    <h1>heading 1 using JSX</h1>
    <h2>heading 2 using JSX</h2>
    <h3>heading 3 using JSX</h3>
  </div>
);
// root.render(headerElement2);

//functional component
const HeaderElement3 = () => (
  <div className="title" id="heading">
    <h1 className="heading1">heading 1 using functional component</h1>
    <h2>heading 2 using functional component</h2>
    <h3>heading 3 using functional component</h3>
  </div>
);

const HeaderElement4 = () => (
  <div className="title" id="heading">
    {/* {headerElement3()} */}
    {/* <HeaderElement3/>
     */}
    <HeaderElement3></HeaderElement3>
    <h1 className="heading1">heading 1 using functional component</h1>
    <h2>heading 2 using functional component</h2>
    <h3>heading 3 using functional component</h3>
  </div>
);
// root.render(HeaderElement4());

const HeaderElement5 = () => (
  <div className="title" id="heading">
    <img
      src="https://img.icons8.com/?size=100&id=10700&format=png&color=000000"
      alt="nhi laga"
    />
    <input type="text" placeholder="Search.."></input>
    <img
      src="https://img.icons8.com/?size=100&id=23264&format=png&color=000000"
      alt="nhi laga"
    />
  </div>
);

root.render(HeaderElement5());
