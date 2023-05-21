import React from 'react';
import TopImgslider from './Main-Components/TopImgslider';
import SelectBrand from './Main-Components/SelectBrand';
import Bestselling from './Main-Components/Bestselling';
import MidImgslider from './Main-Components/MidImgslider';
import MarvelStyled from './Main-Components/MarvelStyled';
import LastImgslider from './Main-Components/LastImgslider';
import BestsellingLaptop from './Main-Components/BestsellingLaptop';
import FollowInsta from './Main-Components/FollowInsta';
import DeliveryInfo from './Main-Components/DeliveryInfo';




import "../styles/Main.scss"



import "react-responsive-carousel/lib/styles/carousel.min.css";


function Main() {
  return (
    <main>

      <TopImgslider/>
      <SelectBrand /> 
      <Bestselling />
      <MidImgslider />
      <MarvelStyled />
      <LastImgslider />
      <BestsellingLaptop />
      <FollowInsta />
      <DeliveryInfo />

    </main>
  )
}

export default Main