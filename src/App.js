import React from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Services from './components/Services';


function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About /> 
      <Contact />
    </div>
  );
}

export default App;
