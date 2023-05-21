import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../assets/Img/midCrousel1.webp";
import Img2 from "../../assets/Img/midCrousel2.webp";

import "../../styles/Main-components-styles/MidImgslider.scss"



const MidImgslider = () => {
  return (
    <div className="mid-img-slider">
        <Carousel infiniteLoop autoPlay 
            showStatus={false} 
            showArrows={false} 
            interval={2000} 
            showThumbs={false}
            showIndicators={false} >
                <div>
                    <img src={Img1} alt="Item1" />
                </div>
                <div>
                    <img src={Img2} alt="Item2" />
                </div>
        </Carousel>
    </div>
  )
}

export default MidImgslider