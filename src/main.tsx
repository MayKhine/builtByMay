import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"

import { Home } from "./components/pages/Home.tsx"
import { Projects } from "./components/pages/Projects.tsx"
import { About } from "./components/pages/About.tsx"

import { ThemeProvider } from "./ThemeContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Projects />} path="/projects"></Route>
          <Route element={<About />} path="/about"></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
