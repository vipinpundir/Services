import React from 'react'
import './Service50.css'
import logo from '../images/Rectangle 35.png.jpg'

const Service50 = () => {
  return (
    <div className='service50'>
      <div className='service50_img'>
        <img src={logo} alt></img>
      </div>
      <div className='service50_text'>
        <h2>TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</h2>
        <p>----- On any service you book -----</p>
        <p className='btn'>BOOK A SERVICE</p>
      </div>
    </div>
  )
}

export default Service50;