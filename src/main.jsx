import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TestIndex from "./TestIndex.jsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<TestIndex />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>
);
