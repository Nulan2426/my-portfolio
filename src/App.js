import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import ScrollButton from './Components/ScrollButton';


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <ScrollButton />
      <Projects />
      <ScrollButton />
      <Contact />
      <ScrollButton/>
      <Footer />
    </div>
  );
};

export default App;
