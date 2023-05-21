import React from 'react'
import { FaInstagram } from 'react-icons/fa';

import Img1 from "../../assets/Main-content-img/followInstaImg1.jpg";
import Img2 from "../../assets/Main-content-img/followInstaImg2.jpg";
import Img3 from "../../assets/Main-content-img/followInstaImg3.jpg";
import Img4 from "../../assets/Main-content-img/followInstaImg4.jpg";
import Img5 from "../../assets/Main-content-img/followInstaImg5.jpg";
import Img6 from "../../assets/Main-content-img/followInstaImg6.jpg";
import Img7 from "../../assets/Main-content-img/followInstaImg7.jpg";
import Img8 from "../../assets/Main-content-img/followInstaImg8.jpg";

 

import "../../styles/Main-components-styles/FollowInsta.scss"


const FollowInsta = () => {
    return (
        <>
            <div className="follow_Insta_container">
                <div className="follow_Insta_title">
                    <h2>FOLLOW US ON INSTAGRAM</h2>
                </div>
                <div className="img_tiles_container">
                    <div className="img_box">
                        <img src={Img1} alt="" />
                        <div className="follow_logo_insta">

                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img2} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img3} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img4} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img5} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img6} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img7} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                    <div className="img_box">
                        <img src={Img8} alt="" />
                        <div className="follow_logo_insta">
                            <a href="">
                                <FaInstagram />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowInsta