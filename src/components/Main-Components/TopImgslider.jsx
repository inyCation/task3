import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../assets/Img/crouselImg1.webp";
import Img2 from "../../assets/Img/crouselImg2.webp";
import Img3 from "../../assets/Img/crouselImg3.webp";
import Img4 from "../../assets/Img/crouselImg4.webp";

import "../../styles/Main-components-styles/TopImgslider.scss";

const TopImgslider = () => {
  return (
    <div className="top-img-slider">
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
                <div>
                    <img src={Img3} alt="Item2" />
                </div>
                <div>
                    <img src={Img4} alt="Item2" />
                </div>
        </Carousel>
    </div>
  )
}

export default TopImgslider