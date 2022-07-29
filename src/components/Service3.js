import React from 'react'
import './Services.css'
import item_img1 from '../images/Rectangle 1918.png'
import item_img2 from '../images/Rectangle 1916.png'
import item_img3 from '../images/Rectangle 1917.png'
import item_img4 from '../images/Rectangle 1919.png'
import item_img5 from '../images/Rectangle 1922.png'
import item_img6 from '../images/Rectangle 20.png'

const Service3 = () => {
  return (
    <div className='service'>

    <div className='service_text'>
        <h2>Trending Services</h2>
        <p>Premium Home Services</p>
    </div>

    <div className='service_items'>
        <div className='service_item1'>
            <img src={item_img1} ></img>
            <p>Washing Machine Repair</p>
        </div>
        <div className='service_item2'>
            <img src={item_img2} ></img>
            <p>Microwave Repair</p>
        </div>
        <div className='service_item3'>
            <img src={item_img3} ></img>
            <p>Refrigerator Repair / Service</p>
        </div>
        <div className='service_item4'>
            <img src={item_img4} ></img>
            <p>RO Service</p>
        </div>
        <div className='service_item5'>
            <img src={item_img5} ></img>
            <p>LED TV Repair</p>
        </div>
        <div className='service_item5'>
            <img src={item_img6} ></img>
            <p>AC Services</p>
        </div>
    </div>

</div>
    )
}

export default Service3