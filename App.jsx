// import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Tittle from './components/Tittle/Tittle';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useState } from 'react';

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
       <Navbar />
       <Hero />
       <div className="container">
       <Tittle subtitle="Our PROGRAM" title="What We Offer" />
       <Programs />
      <About setPlayState={setPlayState}/>
      <Tittle subtitle="Gallery" title="Campus Photos" />
      <Campus/>
      <Tittle subtitle=' TESTIMONALS' title='What Students Says'/>
      <Testimonials/>
      <Tittle subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
       </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;
