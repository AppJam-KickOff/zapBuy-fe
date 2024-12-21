import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MemoryRouter, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Routes path="/" element={<App />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>
);
