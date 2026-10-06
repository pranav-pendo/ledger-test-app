import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

const DEMO_VISITOR_KEY = "tidewater-demo-visitor-id";

// The app has no real login, so each browser gets a random demo ID that survives reloads.
// Pendo does not deliver guides to anonymous visitors, so the ID must be non-empty.
function getDemoVisitorId() {
  try {
    let id = localStorage.getItem(DEMO_VISITOR_KEY);
    if (!id) {
      id = `demo-${crypto.randomUUID()}`;
      localStorage.setItem(DEMO_VISITOR_KEY, id);
    }
    return id;
  } catch {
    return `demo-${crypto.randomUUID()}`;
  }
}

// The `pendo` global comes from the install snippet in index.html. Initialize
// it once, before the first render: Pendo ignores repeat initialize calls, so a
// signed-in user should be registered with pendo.identify() instead.
pendo.initialize({
  visitor: { id: getDemoVisitorId() },
  account: { id: "demo-account" },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
