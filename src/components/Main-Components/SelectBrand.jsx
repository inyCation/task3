import React from 'react';

import Appleimg from "../../assets/Main-content-img/apple.png";
import Asusimg from "../../assets/Main-content-img/asus.png";
import Googleimg from "../../assets/Main-content-img/google.png";
import Iqooimg from "../../assets/Main-content-img/iqoo.jpeg";
import Nothingimg from "../../assets/Main-content-img/nothing.png";
import Oneplusimg from "../../assets/Main-content-img/oneplus.png";
import Oppoimg from "../../assets/Main-content-img/oppo.png";
import Pocoimg from "../../assets/Main-content-img/poco.png";
import Realmeimg from "../../assets/Main-content-img/realme.png";
import Samsungimg from "../../assets/Main-content-img/samsung.png";
import Vivoimg from "../../assets/Main-content-img/vivo.jpeg";
import Xiaomiimg from "../../assets/Main-content-img/xiaomi.png";






const SelectBrand = () => {
  return (
    <>
        <div className="title">
            <h1 href="#">Select Your Brand</h1>
        </div>
        <div className="select-brand-container">
            <div className="brand-container">
                <div>
                    <img src={Appleimg} alt="Apple" />
                    <p>Apple</p>
                </div>
                <div>
                    <img src={Samsungimg} alt="Samsung" />
                    <p>Samsung</p>
                </div>
                <div>
                    <img src={Oneplusimg} alt="Oneplus" />
                    <p>OnePlus</p>
                </div>
                <div>
                    <img src={Googleimg} alt="Google" />
                    <p>Google</p>
                </div>
                <div>
                    <img src={Realmeimg} alt="realme" />
                    <p>Realme</p>
                </div>
                <div>
                    <img src={Xiaomiimg} alt="Xiaomi" />
                    <p>Xiaomi</p>
                </div>
                <div>
                    <img src={Oppoimg} alt="Oppo" />
                    <p>Oppo</p>
                </div>
                <div>
                    <img src={Asusimg} alt="Asus" />
                    <p>Asus</p>
                </div>
                <div>
                    <img src={Nothingimg} alt="Nothing" />
                    <p>Nothing</p>
                </div>
                <div>
                    <img src={Iqooimg} alt="iQoo" />
                    <p>iQOO</p>
                </div>
                <div>
                    <img src={Pocoimg} alt="Poco" />
                    <p>Poco</p>
                </div>
                <div>
                    <img src={Vivoimg} alt="Vivo" />
                    <p>Vivo</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectBrand