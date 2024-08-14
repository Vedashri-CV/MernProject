import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import searchicon from './assets/images/searchicon.jpg';

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/blog'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const handleClick = () => {
    navigate('/veg');
  };

  const Click = () => {
    navigate('/Nonveg');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  // console.log(post.title)
  );

  return (
    <>
      <div className='body'>
        <header></header>

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
