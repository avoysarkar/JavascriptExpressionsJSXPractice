import React from "react";
import ReactDOM from "react-dom";
const YOURNAME = "Avoy Sarkar";
const CURRENTYEAR = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//.
//.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
