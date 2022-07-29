import React from 'react';
import './Services.css'
import item_img1 from '../images/Rectangle 19.png';
import item_img2 from '../images/Rectangle 20.png';
import item_img3 from '../images/image 12.png';
import item_img4 from '../images/image 13.png';

const Services = () => {
    return (
        <div className='service'>

            <div className='service_text'>
                <h2>Trending Services</h2>
                <p>Premium Home Services</p>
            </div>

            <div className='service_items'>
                <div className='service_item1'>
                    <img src={item_img1} ></img>
                    <p>Air-Conditioner Services</p>
                </div>
                <div className='service_item2'>
                    <img src={item_img2} ></img>
                    <p>AC Installation</p>
                </div>
                <div className='service_item3'>
                    <img src={item_img3} ></img>
                    <p>Sofa Cleaning Service</p>
                </div>
                <div className='service_item4'>
                    <img src={item_img4} ></img>
                    <p>Home Deep Cleaning Service</p>
                </div>
                <div className='service_item5'>
                    <img src={item_img1} ></img>
                    <p>Air-Conditioner Services</p>
                </div>
            </div>

        </div>
    )
}

export default Services