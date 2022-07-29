import React from 'react';
import './ServiceType2.css';
import bl_bc from '../images/black_bc.jpg'

const ServiceType2_1 = () => {
    return (
        <div className='servicetype2_1 servicetype2'>
            <div className='servicetype2_text'>
                <h2>Most Used Services</h2>
                <p>Premium Home Services</p>
            </div>
            <div className='servicetype2_itmes'>
                <div className='servicetype2_itme'>
                    <img src={bl_bc} alt='' ></img>
                    <h4>Professional Deep Cleaning</h4>
                    <p>For spring  clean , lease clean</p>
                </div>
                <div className='servicetype2_itme'>
                    <img src={bl_bc} alt='' ></img>
                    <h4>Professional Deep Cleaning</h4>
                    <p>For spring  clean , lease clean</p>
                </div>
                <div className='servicetype2_itme'>
                    <img src={bl_bc} alt='' ></img>
                    <h4>Professional Deep Cleaning</h4>
                    <p>For spring  clean , lease clean</p>
                </div>
                <div className='servicetype2_itme'>
                    <img src={bl_bc} alt='' ></img>
                    <h4>Professional Deep Cleaning</h4>
                    <p>For spring  clean , lease clean</p>
                </div>

            </div>
        </div>
    )
}

export default ServiceType2_1;