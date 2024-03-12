import React from "react"
import ReactDOM from "react-dom/client"
import { Home } from "./Home.tsx"
import { Projects } from "./pages/Projects.tsx"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Projects />} path="/projects"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
