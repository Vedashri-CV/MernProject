import React from 'react';
import './Footer.css'; // Assuming you will style it using a CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Company Name</h3>
                    <p>© 2024 Company Name. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-media">
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#twitter">Twitter</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#linkedin">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
