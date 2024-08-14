import React, { useState } from 'react';
import './Footer.css'; 
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import axios from 'axios';

const Footer = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = async () => {
        if (feedback.trim()) {
            try {
               
                const response = await axios.post("http://localhost:3001/api/feedback", { feedback });
    
                // Handle response
                if (response.status === 200) {
                    alert("Thank you for your feedback!");
                    setFeedback(''); 
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Error during feedback submission:", error.response || error.message);
                alert(`Error submitting feedback: ${error.response?.data?.message || error.message}`);
            }
        } else {
            alert("Please enter your feedback before submitting.");
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
              
                <div className="footer-section">
                    <p><FaSquarePhone size={20}/><b>Contact: </b> 91+ 84382 90552</p>
                    <textarea 
                        value={feedback} 
                        onChange={handleFeedbackChange} 
                        placeholder="Leave your thoughts.." 
                        className="feedback-textarea"
                    />
                    <br></br>
                    <button onClick={handleSubmit} className="feedback-submit">Submit</button>
                </div>
                
                <div className="footer-section">
                    <h4>What We Do</h4>
                    <p >"YumBites is your go-to platform for diverse recipes, engaging blogs, personalized diet plans, and a space to share your culinary creations."</p>
                </div>
                
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-media">
                        <li className='icons'><a href="#facebook"><FaFacebook size={30} /></a></li>
                        <li className='icons'><a href="#twitter"><FaTwitter size={30} /></a></li>
                        <li className='icons'><a href="#instagram"><AiFillInstagram size={30}/></a></li>
                        <li className='icons'><a href="#linkedin"><MdAttachEmail size={30}/></a></li>
                    </ul>
                </div>
            </div>
            <br />
            <div>
                <p className='copyrights'>© 2024 YumBites. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
