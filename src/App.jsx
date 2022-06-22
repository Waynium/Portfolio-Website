import React from 'react'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Education from './Components/education/Education'
import Portfolio from './Components/portfolio/Portfolio'
import Tools from './Components/tools/Tools'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

// functional component => rafce

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Portfolio />
      <Tools />
      <Contact />
      <Footer />
    </>
  )
}

export default App