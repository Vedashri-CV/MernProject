
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import img1 from './assets/images/Oat-Bran-Finished-scaled.jpg';
import img2 from './assets/images/Peach-Salad-in-Bowl.jpg';
import GreenRice from './assets/images/Green-Rice.jpg';
import Avocado from './assets/images/Avocado.jpg';
import MarryMeChicken from './assets/images/Marry-Me-Chicken.jpg';
import SesameButterNoodles from './assets/images/Sesame-Butter-Noodles.jpg';
import ChickenSalad from './assets/images/Chicken-Salad.jpg';
import HoneyChipotleChickenSkewers from './assets/images/Honey-Chipotle-Chicken-Skewers.jpg';
import uttand from './assets/images/UU.jpg';
import chec from './assets/images/chechicken.jpg';
import searchicon from './assets/images/searchicon.jpg';
import author from './assets/images/author.jpeg'
import author1 from './assets/images/author1.jpeg';

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = () => {
    navigate('/veg');
  };

  const Click = () => {
    navigate('/Nonveg');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const posts = [
    {
      id: '1',
      img: HoneyChipotleChickenSkewers,
      title: 'Honey Chipotle Chicken Skewers',
      date: '12 Feb 2023',
      excerpt: 'These chicken skewers are a family favorite! Very easy, deliciously smokys.',
      authorImg: uttand,
      authorName: 'Uttand',
      recipe: 'Recipe details here...',
    },
    {
      id: '2',
      img: chec,
      title: 'Chettinad Chicken Curry',
      date: '12 Feb 2023',
      excerpt: 'This recipe is from one of the most aromatic and spiciest cuisines of India - Chettinad! Chettinad ....',
      authorImg: uttand,
      authorName: 'Raman',
      recipe: 'Recipe details here...',
    },
    {
      id: '3',
      img: GreenRice,
      title: 'Amazing Green Rice',
      date: '12 Feb 2023',
      excerpt: 'This green rice is my FAVORITE! It’s packed with spinach and cilantro, perfectly spicy, nutritious, and goes with just about everything.',
      authorImg:  author1,
      authorName: 'Sugavan',
      recipe: 'Recipe details here...',
    },
    {
      id: '4',
      img: img2,
      title: 'Gorgeous Peach Salad',
      date: '12 Feb 2023',
      excerpt: 'Fresh cucumber, bitey shallots, cooling mint, and sweet fleshy peaches coming together in serious flavor harmony! I love this peach salad.',
      authorImg:  author,
      authorName: 'VedaShri',
      recipe: 'Recipe details here...',
    },
    {
      id: '5',
      img: Avocado,
      title: 'Avocado Caesar Green Beans',
      date: '12 Feb 2023',
      excerpt: 'Grab a bag of green beans, blitz up a quick avocado caesar, toast some panko, and let’s go! This is some type of magic..',
      authorImg: author1,
      authorName: 'Marquise Brown',
      recipe: 'Recipe details here...',
    },
    {
      id: '6',
      img: MarryMeChicken,
      title: 'Marry Me Chicken',
      date: '12 Feb 2023',
      excerpt: 'Golden, juicy chicken coated in a simple creamy sauce with tomatoes, garlic, and thyme. I love this with mashed potatoes and a salad!',
      authorImg:  author,
      authorName: 'Marquise Brown',
      recipe: 'Recipe details here...',
    },
    {
      id: '7',
      img: SesameButterNoodles,
      title: 'Shortcut Sesame Butter Noodles',
      date: '12 Feb 2023',
      excerpt: 'One of my favorite back-pocket recipes! Packaged noodles for ease, butter for creaminess, honey for sweetness, and sesame oil for depth. Just tangly slips of joy!',
      authorImg:  author,
      authorName: 'Marquise Brown',
      recipe: 'Recipe details here...',
    },
    {
      id: '8',
      img: ChickenSalad,
      title: 'Super Yummy Chicken Salad',
      date: '12 Feb 2023',
      excerpt: 'This Chicken Salad is so good! Protein-packed with a delicious creamy dressing, and perfect for an on-the-go lunch in a sandwich or wrap..',
      authorImg: author1,
      authorName: 'Marquise Brown',
      recipe: 'Recipe details here...',
    },
    {
      id: '9',
      img: img1,
      title: 'How To Cook Oat Bran for Breakfast',
      date: '12 Feb 2023',
      excerpt: 'High protein, high fiber – quick and easy to make!',
      authorImg:  author,
      authorName: 'Suganya',
      recipe: 'Recipe details here...',
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className='body'>
        <header>
       
        </header>

        <main>
          <section className="hero">
            <div className="containerr">
              <h1>The Cooking Blog</h1>
              <p>Your source of great content</p>
              <div className='search-box'>
                <input
                  type='text'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <img src={searchicon} alt='/' />
              </div>
            </div>
          </section>

          <nav className="cate">
            <div className="containerr">
              <button className="category-btn active">All</button>
              <button onClick={handleClick} className="category-btn">Veg</button>
              <button onClick={Click} className="category-btn">Non-Veg</button>
            </div>
          </nav>

          <section className="blog-posts">
            <div className="cont">
              {filteredPosts.map((post) => (
                <div
                  className="post-card"
                  key={post.id}
                  onClick={() => navigate(`/recipe/${post.id}`)}
                >
                  <img src={post.img} alt="Blog Image" />
                  <div className="post-content">
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-author">
                      <img src={post.authorImg} alt="Author Image" />
                      <span>{post.authorName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Blog;
