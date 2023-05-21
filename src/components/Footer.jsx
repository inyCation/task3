import React from 'react';
import { FaTwitter,FaYoutube,FaInstagram,FaFacebook,FaWhatsapp } from 'react-icons/fa';

import "../styles/Footer.scss";


function Footer() {
  return (
    <div className="footer-container">
		<footer>
			<div className="vision f-box">
				<h3 className="title" >Vision</h3>
				<li><a href="#">Creativity</a></li>
				<li><a href="#">Expression</a></li>
				<li><a href="#">Exploration</a></li>
			</div>
			<div className="pages f-box">
				<h3 className="title" >Pages</h3>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">Term & Condition</a></li>
				<li><a href="#">Privicy & Policy</a></li>
				<li><a href="#">Refund,Cancellation,Shipping Pollicy</a></li>
				<li><a href="#">FAQ</a></li>
			</div>
			<div className="my-account f-box">
				<h3 className="title" >My Account</h3>
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
				<li><a href="/trackorder">Track Order</a></li>
			</div>
			<div className="follow-us f-box">
				<h3 className="title" >Follow Us</h3>
				<div className="social"> <FaTwitter /> <a href="">Twitter</a></div>
				<div className="social"> <FaFacebook /> <a href="">Facebook</a></div>
				<div className="social"> <FaYoutube /> <a href="">Youtube</a></div>
				<div className="social"> <FaInstagram /> <a href="">Instagram</a></div>
			</div>
		</footer>

		<div className="footer-bottom">
			<div className="hr-line">
				<hr/>
			</div>	
			<a href="">Copyright © 2023 Layers.</a>
		</div>

		<div className="chat-with-us">
			<FaWhatsapp /> <a href="#">Chat With Us</a>
		</div>
	</div>
  )
}

export default Footer