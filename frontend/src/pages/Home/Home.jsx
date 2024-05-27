import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Feature from '../../components/Feature/Feature'
import About from '../../components/About/About'
import Works from '../../components/Works/Works'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Feature/>
        <Works/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home