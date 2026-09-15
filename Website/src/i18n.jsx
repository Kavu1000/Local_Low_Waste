import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_LANG = 'llw-lang'

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

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => (safeGet(STORAGE_LANG) === 'en' ? 'en' : 'lo'))

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'lo'
    safeSet(STORAGE_LANG, lang)
  }, [lang])

  // t(loText, enText) -> the string for the current language
  const t = (lo, en) => (lang === 'en' ? en : lo)

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}
