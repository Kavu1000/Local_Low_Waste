import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { useTheme } from '../useTheme'
import { CloseIcon, GlobeIcon, HeartIcon, HomeIcon, LogoMark, SearchIcon } from './Icons'

const NAV_LINKS = [
  { href: '#news', lo: 'ຜົນງານ', en: 'Our work' },
  { href: '#whatwedo', lo: 'ວຽກຂອງເຮົາ', en: 'What we do' },
  { href: '#story', lo: 'ບົດຄວາມ', en: 'Story' },
  { href: '#team', lo: 'ທີມງານ', en: 'Team' },
  { href: '#partners', lo: 'ຄູ່ຮ່ວມງານ', en: 'Partners' },
  { href: '#involved', lo: 'ເຂົ້າຮ່ວມ', en: 'Get involved' },
]

export default function Header({ query, setQuery }) {
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [navOpen, setNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchInput = useRef(null)

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus()
  }, [searchOpen])

  function closeSearch() {
    setSearchOpen(false)
    setQuery('')
  }

  function onSearchSubmit(e) {
    e.preventDefault()
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    document
      .getElementById('news')
      ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <>
      {/* ============ Utility bar ============ */}
      <div className="utility">
        <div className="wrap">
          <div className="utility-left">
            <span className="utility-tab">{t('ວຽງຈັນ', 'Vientiane')}</span>
          </div>

          <div className="utility-right">
            <button
              type="button"
              className="icon-btn"
              aria-expanded={searchOpen}
              aria-controls="site-search"
              aria-label={t('ຄົ້ນຫາຂ່າວ', 'Search news')}
              onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
            >
              {searchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>

            <span className="lang-icon" aria-hidden="true">
              <GlobeIcon />
            </span>
            <div className="lang-toggle" role="group" aria-label="Language / ພາສາ">
              <button type="button" aria-pressed={lang !== 'en'} onClick={() => setLang('lo')}>
                ລາວ
              </button>
              <span aria-hidden="true">|</span>
              <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
                EN
              </button>
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
            >
              {t('ໂໝດມືດ', 'Dark mode')}
            </button>
          </div>
        </div>
      </div>

      {/* ============ Search strip ============ */}
      {searchOpen && (
        <form className="searchbar" id="site-search" onSubmit={onSearchSubmit} role="search">
          <div className="wrap">
            <label htmlFor="q">{t('ຄົ້ນຫາຂ່າວ ແລະ ກິດຈະກຳ', 'Search news and events')}</label>
            <div className="searchbar-row">
              <input
                id="q"
                ref={searchInput}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('ພິມຄຳຄົ້ນຫາ…', 'Type a keyword…')}
              />
              <button type="submit" className="btn btn-green">
                {t('ຄົ້ນຫາ', 'Search')}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ============ Masthead ============ */}
      <div className="masthead">
        <div className="wrap">
          <a className="brand" href="#top">
            <LogoMark />
            <span className="brand-word">
              <strong>{t('ໂຄງການ Low Waste ໃນທ້ອງຖິ່ນ', 'Local Low')}</strong>
              <strong>{t('ປະເທດລາວ', 'Waste Laos')}</strong>
            </span>
          </a>

          <a className="masthead-cta" href="#involved">
            <span className="masthead-cta-icon" aria-hidden="true">
              <HeartIcon />
            </span>
            {t('ເຂົ້າຮ່ວມ', 'Get involved')}
          </a>

          <button
            className="hamburger"
            aria-expanded={navOpen}
            aria-controls="mainnav"
            aria-label={t('ເມນູ', 'Menu')}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ============ Main nav ============ */}
      <nav className={`mainnav${navOpen ? ' open' : ''}`} id="mainnav">
        <div className="wrap">
          <ul>
            <li>
              <a className="nav-home" href="#top" aria-label={t('ໜ້າຫຼັກ', 'Home')} onClick={() => setNavOpen(false)}>
                <HomeIcon />
              </a>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setNavOpen(false)}>
                  {t(link.lo, link.en)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
