import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error("useTheme must be used within a theme provider")
  }

  return themeContext
}
