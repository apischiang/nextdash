"use client"

import type * as React from "react"
import { useEffect, useState } from "react"
import { Sun, Monitor, Moon } from "lucide-react"

type Theme = "light" | "system" | "dark"

export function ModeToggle() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get saved theme from localStorage
    const saved = localStorage.getItem("theme") as Theme | null
    if (saved) {
      setTheme(saved)
      applyTheme(saved)
    } else {
      // Apply system preference by default
      applyTheme("system")
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const htmlElement = document.documentElement

    if (newTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      htmlElement.classList.toggle("dark", prefersDark)
    } else {
      htmlElement.classList.toggle("dark", newTheme === "dark")
    }
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  const modes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun className="w-4 h-4" /> },
    { value: "system", label: "System", icon: <Monitor className="w-4 h-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="w-4 h-4" /> },
  ]

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg border border-border mx-2">
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => handleThemeChange(mode.value)}
          className={`
            flex items-center justify-center gap-2 px-2 py-1.5 rounded-md transition-all flex-1
            ${
              theme === mode.value
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }
          `}
          title={mode.label}
          aria-label={`Switch to ${mode.label} theme`}
        >
          {mode.icon}
        </button>
      ))}
    </div>
  )
}
