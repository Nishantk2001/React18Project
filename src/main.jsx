import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { APIContextProvider } from "./utils/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>
);
