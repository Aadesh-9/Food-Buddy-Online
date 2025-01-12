import React from "react";
import ReactDOM from "React-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "heading1" }, "Aadesh"),
    React.createElement("h1", { id: "heading2" }, "Wasamkar"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "heading3" }, "Aadesh"),
    React.createElement("h1", { id: "heading4" }, "Wasamkar"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
