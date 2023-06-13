import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RegisterProvider } from "./contexts/registerContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RegisterProvider>
        <App />
      </RegisterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
