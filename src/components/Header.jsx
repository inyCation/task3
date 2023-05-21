import React from 'react';
import Logo from "../assets/Img/Logo_White.webp";

import {FaSearch, FaCartArrowDown} from "react-icons/fa";

import "../styles/Header.scss";



function Header() {
  return (
    <>
		<nav>
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="menu">
					<li><a href="/marvelskins">Marvel Skins</a></li>
					<li><a href="/mobileskins">Mobile Skins</a></li>
					<li><a href="/laptopskins">Laptop Skins</a></li>
					<li><a href="/skincollection">Skin Collections</a></li>
					<li><a href="/howtoapply">How To Apply</a></li>
					<li><a href="/trackorder">Track Order</a></li>
					<li><a href="/login">Login</a></li>
			</div>
			<div className="search-cart">
				<div className="search">
					<FaSearch />
				</div>
				<div className="cart">
					<FaCartArrowDown />
				</div>
			</div>
		</nav>
    </>
  )
}

export default Header