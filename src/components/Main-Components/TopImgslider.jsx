import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../assets/Img/phoneThree.webp";
import Img2 from "../../assets/Img/phoneThree3.webp";
import Img3 from "../../assets/Img/phonezThree3.webp";

const TopImgslider = () => {
  return (
    <div className="top-img-slider">
        <Carousel infiniteLoop autoPlay 
            showStatus={false} 
            showArrows={false} 
            interval={1500} 
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
        </Carousel>
    </div>
  )
}

export default TopImgslider