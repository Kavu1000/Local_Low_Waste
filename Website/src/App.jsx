import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NewsSection from './components/NewsSection'
import WhatWeDo from './components/WhatWeDo'
import StatsBand from './components/StatsBand'
import FeatureStory from './components/FeatureStory'
import Team from './components/Team'
import Partners from './components/Partners'
import GetInvolved from './components/GetInvolved'
import Footer from './components/Footer'
import { LangProvider, useLang } from './i18n'
import './App.css'

function SkipLink() {
  const { t } = useLang()
  return (
    <a className="skip-link" href="#main">
      {t('ຂ້າມໄປຫາເນື້ອຫາຫຼັກ', 'Skip to main content')}
    </a>
  )
}

function App() {
  const [query, setQuery] = useState('')

  return (
    <LangProvider>
      <SkipLink />
      <Header query={query} setQuery={setQuery} />
      <main id="main">
        <Hero />
        <NewsSection query={query} />
        <WhatWeDo />
        <StatsBand />
        <FeatureStory />
        <Team />
        <Partners />
        <GetInvolved />
      </main>
      <Footer />
    </LangProvider>
  )
}

export default App
