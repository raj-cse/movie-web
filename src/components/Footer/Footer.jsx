import React from "react";
import './Footer.css';
import insta from '../../Image/icons8-instagram-logo-48.png';
import face from '../../Image/icons8-facebook-logo-50-Photoroom.png';
import lin from '../../Image/icons8-linkedin-2-30-Photoroom.png';
import twit from '../../Image/icons8-twitter-50-Photoroom (1).png';
import logo from '../../Image/ffTiYckswWi9iJ3Oj4vRm-transformed.png';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="grid">
                <div className="footer-img">
                    <img src={insta} alt="Instagram" />
                    <img src={face} alt="Facebook" />
                    <img src={lin} alt="LinkedIn" />
                    <img src={twit} alt="Twitter" />
                </div>
                <div className="footer-head">
                    <div className="section section-1">
                        <ul>
                            <li>Company</li>
                            <li>Blog</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="section section-2">
                        <ul>
                            <li>Support</li>
                            <li>Legal policy</li>
                            <li>Status policy</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="section section-3">
                        <ul>
                            <li>Follow</li>
                            <li>Email: rajpatiyal26@gmail.com</li>
                            <li>Made by: Raj Patiyal</li>
                            <li>Contact no: 987089XXXX</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
