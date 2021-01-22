import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { sliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import AboutSection from './components/AboutSection';
import { AboutData } from './data/AboutData';

function App() {
  const [isOpen, setIsOpen] = useState(false)

const toggle = ()=>{
  setIsOpen(!isOpen)
}

  return (
    <>
    <GlobalStyle/>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle} />
     <Hero slides={sliderData}/>
     <AboutSection {...AboutData}/>
    </>
  );
}

export default App;
