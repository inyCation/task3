import React,{useState} from 'react';
import Logo from "../assets/Img/Logo_White.webp";

import {FaSearch, FaCartArrowDown,} from "react-icons/fa";
import {AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "../styles/Header.scss";



function Header() {
	
		const [menuOpen, setMenuOpen] = useState(false);
	  
		const toggleMenu = () => {
		  setMenuOpen(!menuOpen);
		  document.body.style.overflow = menuOpen ? "auto" : "hidden";
		};
	  
  	return (
    <>
		<nav>
			<div className="ham ">
				<a className="menu_btn"  onClick={toggleMenu} >
					{menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
				</a>
				
			</div>
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className={`menu ${menuOpen ? 'menu-show' : ''}`}>
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