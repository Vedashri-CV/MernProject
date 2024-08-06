import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

const categories = ['South Indian', 'North Indian', 'Chinese', 'Italian'];

const images = [
  'https://images.pexels.com/photos/3838633/pexels-photo-3838633.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your image paths
  'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6632444/pexels-photo-6632444.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6546424/pexels-photo-6546424.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      <nav className="navbar">
        <div className="logo">Recipe App</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="Plan">Plan</a>
          <a href="Diet">MyDiet</a>
          <a href="Blog">Blog</a>
        
          <a href="Sign">SignUp</a>
        </div>
      </nav>
      <div className="header-content">
        <div className="search-category">
          <h1 className='recipe'>All Recipes</h1>
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
          <img src={images[currentImage]} alt="Slideshow" />
        </div>
      </div>
    </header>
  );
}

export default Header;
