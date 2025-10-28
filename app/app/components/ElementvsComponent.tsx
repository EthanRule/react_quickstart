import React from "react";

interface props {
  text: string;
}

const Greeting = ({ text }: props) => {
  // <-- react component
  return <p>{text}</p>;
};

const App = () => {
  // react component
  return React.createElement(
    "div",
    {
      className: "container",
    },
    [
      React.createElement("p", { className: "danger" }, "Hello React"),

      React.createElement("p", { className: "danger" }, "Hello React"),
    ]
  );
};
