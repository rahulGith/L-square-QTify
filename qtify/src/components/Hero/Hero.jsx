import React from 'react'
import './Hero.css'
import headphone from '../../assets/headphone.svg'

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
      </h1>
      <div className='headphone'>
        <img src={headphone} alt="headphone" />
      </div>
    </div>
  );
}

export default Hero