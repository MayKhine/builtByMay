import { createContext, useState } from "react"

type ThemeContextType = {
  theme: string
  toggleTheme: (color: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<string>("white")

  const toggleTheme = (color: string) => {
    // const newTheme = theme === "light" ? "dark" : "light"
    const newTheme = color
    setTheme(color)
    document.documentElement.setAttribute("data-theme", newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
