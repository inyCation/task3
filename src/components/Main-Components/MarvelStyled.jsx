import React from 'react';

import img1 from "../../assets/Main-content-img/bestSellingMobilePhone1.png";
import img2 from "../../assets/Main-content-img/bestSellingMobilePhone2.webp";
import img3 from "../../assets/Main-content-img/bestSellingMobilePhone3.webp";

import "../../styles/Main-components-styles/MarvelStyled.scss";


const MarvelStyled = () => {
  return (
    <>
        <div className="bestselling-container">
            <div className="bestselling-title">
                <h2>Official Marvel Inspired Designs </h2>
            </div>
            <div className="phone-container">
                <div className="phone">
                    <img src= {img1} alt="img1" />
                    <div className="name-price">
                        <a className="name">
                            Astro
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>

                    <div className="new_skin"><a href="#">New Skin</a></div>
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img2} alt="img2" />
                    <div className="name-price">
                        <a className="name">
                            Wolfgang
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    <div className="new_skin"> <a href="#">New Skin</a> </div>
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img3} alt="img3" />
                    <div className="name-price">
                        <a className="name">
                            Blue Smoke
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img1} alt="img4" />
                    <div className="name-price">
                        <a className="name">
                            Table
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img2} alt="img5" />
                    <div className="name-price">
                        <a className="name">
                            Raven
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img3} alt="img6" />
                    <div className="name-price">
                        <a className="name">
                            CrispyBlack
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
                <div className="phone">
                    <img src= {img1} alt="img7" />
                    <div className="name-price">
                        <a className="name">
                            DeathShadow
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>
                    
                    <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                    
                </div>
                <div className="phone">
                    <img src= {img2} alt="img8" />
                    <div className="name-price">
                        <a className="name">
                            Blue Moon
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </div>   
                        
                        <div className="select_your_device" ><a href="#">Select Your Device</a></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MarvelStyled