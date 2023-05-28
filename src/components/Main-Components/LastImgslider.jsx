import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';

import Img1 from "../../assets/Img/lastCrouselImg1.webp";
import Img2 from "../../assets/Img/lastCrouselImg2.webp";
import Img1Mobile from "../../assets/Img/lastCrouselPhoneImg1.webp";
import Img2Mobile from "../../assets/Img/lastCrouselPhoneImg2.webp"

import "../../styles/Main-components-styles/LastImgslider.scss"



const LastImgslider = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isCarouselSwipeDisabled, setIsCarouselSwipeDisabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    const handleScroll = () => {
      setIsCarouselSwipeDisabled(true);
    };


    handleResize(); 

    window.addEventListener('resize', handleResize); 
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('resize', handleResize); 
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);



  return (
    <div className="last-img-slider">
        <Carousel infiniteLoop autoPlay 
            showStatus={false} 
            showArrows={!isCarouselSwipeDisabled} 
            interval={2000} 
            showThumbs={false}
            showIndicators={false} 
            swipeable={!isCarouselSwipeDisabled}
            emulateTouch={!isCarouselSwipeDisabled}
            >
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