import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../assets/Img/lastCrouselImg1.webp";
import Img2 from "../../assets/Img/lastCrouselImg2.webp";
import Img1Mobile from "../../assets/Img/lastCrouselPhoneImg1.webp";
import Img2Mobile from "../../assets/Img/lastCrouselPhoneImg2.webp"

import "../../styles/Main-components-styles/LastImgslider.scss"



const LastImgslider = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);



  return (
    <div className="last-img-slider">
        <Carousel infiniteLoop autoPlay 
            showStatus={false} 
            showArrows={false} 
            interval={2000} 
            showThumbs={false}
            showIndicators={false} >
                <div>
         			    <img src={isMobile ? Img1Mobile : Img1} alt="Item1" />
        		    </div>
                <div>
         			    <img src={isMobile ? Img2Mobile : Img2} alt="Item1" />
        		    </div>
        </Carousel>
    </div>
  )
}

export default LastImgslider