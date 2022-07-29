import React from 'react';
import './Header.css';
import item_img1 from '../images/Group 7075.png';
import item_img2 from '../images/Group 7076.png';
import item_img3 from '../images/Group 7077.png';
import item_img4 from '../images/Group 7078.png';
import item_img5 from '../images/Group 7079.png';
import item_img6 from '../images/Group 7080.png';
import item_img7 from '../images/Group 7081.png';
import item_img8 from '../images/Group 7082.png';
import item_img9 from '../images/Group 7083.png';
import item_img10 from '../images/Group 7084.png';
import item_img11 from '../images/Group 7085.png';
import item_img12 from '../images/Group 7086.png';
import Slick from './Slick';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_p1'>

                <div className='header_p1_text'>
                    <h2>Home service on demand</h2>
                    <input type="search" placeholder='Search for any service...' ></input>
                    <p>

                        <span style={{ fontWeight: 'bold' }}> Examples:</span>
                        <span> <a href=''>Salon</a> </span>
                        <span> <a href=''>Woment's haor</a> </span>
                        <span> <a href=''>Men's grooming</a> </span>
                        <span> & Many more </span>
                    </p>
                </div>

            </div>

            <div className='header_p2'>

                <h2>What are you looking for?</h2>

                <div className='header_p2_itmes'>

                    <div className='header_p2_itmes_p1'>
                        <div className='header_p2_itme1'>
                            <img src={item_img1} alt="" ></img>
                            <p> Salon at Home </p>
                        </div>
                        <div className='header_p2_itme2'>
                            <img src={item_img2} alt="" ></img>
                            <p> Electricion </p>
                        </div>
                        <div className='header_p2_itme3'>
                            <img src={item_img3} alt="" ></img>
                            <p> Plumber </p>
                        </div>
                        <div className='header_p2_itme4'>
                            <img src={item_img4} alt="" ></img>
                            <p> CCTV </p>
                        </div>
                    </div>
                    <div className='header_p2_itmes_p2'>
                        <div className='header_p2_itme5'>
                            <img src={item_img5} alt="" ></img>
                            <p> House Painting </p>
                        </div>
                        <div className='header_p2_itme6'>
                            <img src={item_img6} alt="" ></img>
                            <p> Packers & Movers </p>
                        </div>
                        <div className='header_p2_itme7'>
                            <img src={item_img7} alt="" ></img>
                            <p> Cleaning </p>
                        </div>
                        <div className='header_p2_itme8'>
                            <img src={item_img8} alt="" ></img>
                            <p> AC Service  </p>
                        </div>
                    </div>
                    <div className='header_p2_itmes_p3'>

                        <div className='header_p2_itme9'>
                            <img src={item_img9} alt="" ></img>
                            <p> Home Appliances </p>
                        </div>
                        <div className='header_p2_itme10'>
                            <img src={item_img10} alt="" ></img>
                            <p> Disinfection </p>
                        </div>
                        <div className='header_p2_itme11'>
                            <img src={item_img11} alt="" ></img>
                            <p>Pest Control</p>
                        </div>
                        <div className='header_p2_itme12'>
                            <img src={item_img12} alt="" ></img>
                            <p> Carpenter</p>
                        </div>

                    </div>

                </div>

                <div className='header_slider'>
                    <Slick></Slick>
                </div>

            </div>

        </div>
    )
}

export default Header;