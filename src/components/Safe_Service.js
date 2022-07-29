import React from 'react';
import './Safe_Service.css';
import safe_service_img1 from '../images/delivery-man-red-uniform-medical-mask-gloves-pointing-fingers-away-looking-confident 1.png'

const Safe_Service = () => {
    return (
        <div className='safe_service'>
            <div className='safe_service_text'>
                <h2>100% Safe Services</h2>

                <div className='safe_service_li'>
                    <div>
                        <li>Temperature Checks</li>
                        <li>Sanitized Tools</li>
                    </div>
                    <div>
                        <li> Masks</li>
                        <li>Gloves</li>
                    </div>
                </div>
            </div>
            <div className='safe_service_img'>
                <img src={safe_service_img1} alt=''></img>
            </div>
        </div>
    )
}

export default Safe_Service;