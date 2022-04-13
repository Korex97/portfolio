import React from 'react'
import Header from "./components/header/Header";
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

export const Main = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}
