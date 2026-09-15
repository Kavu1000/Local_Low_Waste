import { useEffect, useState } from 'react'

const STORAGE_THEME = 'llw-theme'

function safeGet(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function safeSet(key, val) {
  try {
    localStorage.setItem(key, val)
  } catch {
    /* ignore */
  }
}

// theme: null (follow system) | 'light' | 'dark'
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = safeGet(STORAGE_THEME)
    return stored === 'dark' || stored === 'light' ? stored : null
  })

  useEffect(() => {
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme)
      safeSet(STORAGE_THEME, theme)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  function toggleTheme() {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const current = theme || (prefersDark ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
