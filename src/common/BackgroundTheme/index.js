import { useEffect, useState } from "react"

export default () => {
  const [theme, setTheme] = useState("light-mode")

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light-mode") {
      window.localStorage.setItem("theme", "dark-mode")
      setTheme("dark-mode")
    } else {
      window.localStorage.setItem("theme", "light-mode")
      setTheme("light-mode")
    }
  }
  
  return [
    theme,
    toggleTheme,
  ]
}