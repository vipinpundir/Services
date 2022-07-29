import React from 'react'
import './Services.css'
import service2_img1 from '../images/Carpenter-PNG-Image.png'
import service2_img2 from '../images/kisspng-dick-rosher-plumbing-inc-plumber-drain-leak-plumber-5abfda3c8ab124 1.png'
import service2_img5 from '../images/kisspng-insecticide-pesticide-herbicide-sprayer-5d0e1b4badf171.png'
import service2_img3 from '../images/kisspng-technician-plumber-electrician-home-repair-mainten-5ae1b847d030b7 1.png'
import service2_img4 from '../images/pngegg.png'

const Services2 = () => {
  return (

    <div className='service service2'>

    <div className='service_text'>
        <h2>Same Day Services</h2>
        <p>Premium Home Services</p>
    </div>

    <div className='service_items'>
        <div className='service_item1'>
            <img src={service2_img1} ></img>
            <p>Carpentery Services</p>
        </div>
        <div className='service_item2'>
            <img src={service2_img2} ></img>
            <p>Plumbing Services</p>
        </div>
        <div className='service_item3'>
            <img src={service2_img3} ></img>
            <p>Electrical Services</p>
        </div>
        <div className='service_item4'>
            <img src={service2_img4} ></img>
            <p>Painting Services</p>
        </div>
        <div className='service_item5'>
            <img src={service2_img5} ></img>
            <p>Pest Control Serviecs</p>
        </div>
    </div>

</div>
    
  )
}

export default Services2