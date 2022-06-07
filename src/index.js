import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import RecipeContext from './RecipeContext'
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RecipeContext>
      <App />
    </RecipeContext>
  </StrictMode>,
  rootElement
);