import React from 'react'
import PrimaryButton from './Button'

const Hero = () => {

  const handleExplore = ()=>{
    alert('Exploring from hero componenet')
}

  return (
    <div style={{
      height: "400px",
      border: "1px solid"
    }}>
      <h1 style={{display:'flex'}}>Welcome to Amazon</h1>
      <PrimaryButton text='Explore our products' display={handleExplore} style={{
        fontSize: "1.3rem"
      }}/>
    </div>
  )
}

export default Hero