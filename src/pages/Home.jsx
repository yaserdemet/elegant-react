import React from 'react'
import Cards from '../components/Cards'
import FirstSection from '../components/FirstSection'
import IconSection from '../components/IconSection'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
        <FirstSection />
        <IconSection />
        <Cards />
        <Projects />
    </div>
  )
}

export default Home