import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slick.css'

class Slick extends Component {
  render() {
    const settings = {
      autoplay: true,
      infinite: true,
      slidesToShow: 2.1,
      slidesToScroll: 1
    };
    return (
      <div className="container" >
        <Slider {...settings} className='SSlider' >
        <div className='stick_img'><img src={require('../images/1.png')} alt="Credit to Joshua Earle on Unsplash"/></div>
        <div className='stick_img'><img src={require('../images/2.png')} alt="Credit to Alisa Anton on Unsplash"/></div>
        <div className='stick_img'><img src={require('../images/5.png')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        </Slider>
      </div>
    );
  }
}

export default Slick;
