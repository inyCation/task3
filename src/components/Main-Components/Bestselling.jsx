import React from 'react';

import img1 from "../../assets/Main-content-img/bestSellingMobilePhone1.png";
import img2 from "../../assets/Main-content-img/bestSellingMobilePhone2.webp";
import img3 from "../../assets/Main-content-img/bestSellingMobilePhone3.webp";



const Bestselling = () => {
  return (
    <>
        <div className="bestselling-container">
            <div className="bestselling-title">
                <h2>Best Selling Mobile Skins</h2>
            </div>
            <div className="phone-container">
                <div className="phone">
                    <img src= {img1} alt="img1" />
                    <a className="name-price">
                        <a className="name">
                            Astro
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                    
                </div>
                <div className="phone">
                    <img src= {img2} alt="img2" />
                    <a className="name-price">
                        <a className="name">
                            Wolfgang
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img3} alt="img3" />
                    <a className="name-price">
                        <a className="name">
                            Blue Smoke
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img1} alt="img4" />
                    <a className="name-price">
                        <a className="name">
                            Table
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img2} alt="img5" />
                    <a className="name-price">
                        <a className="name">
                            Raven
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img3} alt="img6" />
                    <a className="name-price">
                        <a className="name">
                            CrispyBlack
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img1} alt="img7" />
                    <a className="name-price">
                        <a className="name">
                            DeathShadow
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
                <div className="phone">
                    <img src= {img2} alt="img8" />
                    <a className="name-price">
                        <a className="name">
                            Blue Moon
                        </a>
                        <a className="price">
                            ₹ 599
                        </a>
                    </a>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Bestselling