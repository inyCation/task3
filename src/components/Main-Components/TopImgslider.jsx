import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Img1 from "../../assets/Img/crouselImg1.webp";
import Img2 from "../../assets/Img/crouselImg2.webp";
import Img3 from "../../assets/Img/crouselImg3.webp";
import Img4 from "../../assets/Img/crouselImg4.webp";
import Img1Mobile from "../../assets/Img/crouselPhoneImg1.webp";
import Img2Mobile from "../../assets/Img/crouselPhoneImg2.webp";
import Img3Mobile from "../../assets/Img/crouselPhoneImg3.webp";
import Img4Mobile from "../../assets/Img/crouselPhoneImg4.webp";

import "../../styles/Main-components-styles/TopImgslider.scss";

const TopImgslider = () => {
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
    <div className="top-img-slider">
      <Carousel infiniteLoop autoPlay 
        showStatus={false} 
        showArrows={false} 
        interval={2000} 
        showThumbs={false}
        showIndicators={false}>
        <div>
          <img src={isMobile ? Img1Mobile : Img1} alt="Item1" />
        </div>
        <div>
          <img src={isMobile ? Img2Mobile : Img2} alt="Item2" />
        </div>
        <div>
          <img src={isMobile ? Img3Mobile : Img3} alt="Item3" />
        </div>
        <div>
          <img src={isMobile ? Img4Mobile : Img4} alt="Item4" />
        </div>
      </Carousel>
    </div>
  );
};

export default TopImgslider;
