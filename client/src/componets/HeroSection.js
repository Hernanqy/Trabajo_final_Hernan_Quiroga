import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LA AVENTURA TE ESPERA</h1>
      <p>TU QUE ESPERAS?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >COMENCEMOS
        </Button>

        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={<Link to="https://www.youtube.com/watch?v=ZnCH1MSm4Ls" className="text-gray-400 text-sm hover:text-gray-300">Volver</Link>}
        >
          MIRA EL TRAILER <i className='far fa-play-circle' />
          
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;