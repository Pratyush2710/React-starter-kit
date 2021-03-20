import React from "react";
import ReactDOM from "react-dom";

const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.company),
    React.createElement("h2", {}, props.age),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Profile!"),
    React.createElement(Person, {
      name: "Pratyush",
      company: "Jio",
      age: "22",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
