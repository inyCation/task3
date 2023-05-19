import React from 'react';
import TopImgslider from './Main-Components/TopImgslider';
import SelectBrand from './Main-Components/SelectBrand';
import Bestselling from './Main-Components/Bestselling'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Main-components-styles/TopImgslider.scss";
import "../styles/Main-components-styles/SelectBrand.scss";
import "../styles/Main-components-styles/Bestselling.scss";


function Main() {
  return (
    <main>

      <TopImgslider/>
      <SelectBrand /> 
      <Bestselling />

    </main>
  )
}

export default Main