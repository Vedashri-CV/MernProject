import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const categories = ['South Indian', 'North Indian', 'Chinese', 'Italian'];

function Header({ setSearchTerm, setCategory }) {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Recipe App</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Recipe</a>
          <a href="#">MyDiet</a>
          <a href="#">Blog</a>
          <a href="#">SignUp</a>
        </div>
      </nav>
      <div className="header-content">
        <h1>All Recipes</h1>
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="categories">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
