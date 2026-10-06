import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// The `pendo` global comes from the install snippet in index.html. Initialize
// it once, before the first render: Pendo ignores repeat initialize calls, so a
// signed-in user should be registered with pendo.identify() instead.
pendo.initialize({ visitor: { id: "" } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
