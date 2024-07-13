import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartContexProvider } from "./components/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContexProvider>
      <App />
    </CartContexProvider>
  </React.StrictMode>
);
