import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

const categories = ['South Indian', 'North Indian', 'Chinese', 'Italian'];

const images = [
  'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/4253128/pexels-photo-4253128.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/7593253/pexels-photo-7593253.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=600'
];

function Header({ setSearchTerm, setCategory }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      
      <div className="header-content">
        <div className="search-category">
          <br></br>
          <h1 className='recipe-head'>500+ Recipes For You!</h1>
          <p className='recipe-des'><b>
            A recipe is a story that ends with a good meal. <br></br>The only recipe is hard work, persistence, and belief. <br></br>The first time you make something, follow the recipe, <br></br>then figure out how to tailor it to your own tastes.</b></p>

          <br></br>
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="categoriess">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="image-slideshow">
          <img className='header-image' src={images[currentImage]} alt="Slideshow" />
        </div>
      </div>
    </header>
  );
}

export default Header;
