import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"

import { Home } from "./pages/Home.tsx"
import { Projects } from "./pages/Projects.tsx"
import { About } from "./pages/About.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Projects />} path="/projects"></Route>
        <Route element={<About />} path="/about"></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
